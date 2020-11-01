import React, { useState, useEffect } from "react";
import { getLongUrl } from "utils/firebase";
import errorIcon from "assets/error-icon.png";
import "styles/handleRedirect.css";

interface Props {
  match: { params: { shortUrl: string } };
}

function HandleRedirect(props: Props) {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    (async () => {
      const shortUrl = props.match.params.shortUrl;
      const { data } = await getLongUrl({ shortUrl });

      const { status, longUrl } = data;
      if (status) window.location.href = longUrl;
      else setStatus("failed");
    })();
  });
  return (
    <div className="hr-main">
      {status === "loading" && (
        <div className="message">
          <div className="loader" />
          <h2>Loading...</h2>
        </div>
      )}
      {status === "failed" && (
        <div className="message">
          <img alt="link not found" src={errorIcon} width={200} />
          <h2>Link not found</h2>
        </div>
      )}
    </div>
  );
}

export default HandleRedirect;
