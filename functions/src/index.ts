import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as crypto from "crypto";

admin.initializeApp();

//  eslint 'src/**/*'

const db = admin.firestore();

export const getLongUrl = functions
  .region("asia-south1")
  .https.onCall(async (req, res) => {
    const { shortUrl } = req;
    const docRef = await db
      .collection("database")
      .where("shortUrl", "==", shortUrl)
      .get();

    if (!docRef.empty) {
      const { docs } = docRef;
      return { status: true, longUrl: docs[0].data().longUrl };
    } else return { status: false };
  });

export const getShortUrl = functions
  .region("asia-south1")
  .https.onCall(async (req, res) => {
    const { longUrl } = req;
    const docRef = await db
      .collection("database")
      .where("longUrl", "==", longUrl)
      .get();

    if (docRef.empty) {
      const shortUrl = crypto.randomBytes(4).toString("hex");
      await db.collection("database").add({ longUrl, shortUrl });
      return shortUrl;
    } else {
      const { docs } = docRef;
      const doc = docs[0];
      return doc.data().shortUrl;
    }
  });
