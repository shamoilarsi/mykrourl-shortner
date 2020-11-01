import React, { useState } from "react";
import { getShortUrl } from "utils/firebase";
import "styles/main.css";

function Main() {
  const [longUrl, setLongUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data: shortUrl } = await getShortUrl({ longUrl });
    setShortUrl(shortUrl);
    // setLongUrl("");
  };

  const closeShortUrlDialog = () => {
    setShortUrl("");
  };

  return (
    <div className="main">
      <div className="bgshape" />
      <div className="container">
        <div>
          <h3>URL Shortner</h3>
          <p>A simple yet functional url shortner</p>
        </div>
        <form onSubmit={onSubmit} className="form__group field">
          <label htmlFor="name" className="">
            Long URL
          </label>
          <input
            required
            type="input"
            className="form__field"
            placeholder="https://www.google.com"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button onClick={onSubmit} className="btn main-btn">
            Get Short Url
          </button>
        </form>
        {shortUrl !== "" && (
          <div className="fadebg">
            <div className="shortUrl_dialog">
              <p>
                Long Url - <a href={longUrl}>{longUrl}</a>
              </p>
              <p>
                Short Url -{" "}
                <a href={window.location.href + shortUrl}>
                  {window.location.href + shortUrl}
                </a>
              </p>
              <button onClick={closeShortUrlDialog} className="btn close-btn">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
