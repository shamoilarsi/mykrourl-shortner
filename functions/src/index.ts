import * as functions from 'firebase-functions';
//  eslint 'src/**/*'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
export const getLongURK = functions.https.onCall((req, res) => {console.log('getLongURL called')})