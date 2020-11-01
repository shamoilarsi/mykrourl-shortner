import React, { useState } from "react";
import "styles/main.css";

function Main() {
  const [longUrl, setLongUrl] = useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(longUrl);
  };

  return (
    <div className="main">
      <div className="container">
        <h3>Easy URL Shortner</h3>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Enter Long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default Main;
