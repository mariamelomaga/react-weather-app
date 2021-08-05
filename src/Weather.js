import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Lisbon</h1>

      <footer>
        This project was coded by Maria Melo and {""}
        <a
          href="https://github.com/mariamelomaga/react-weather-app"
          target="_blank"
          rel="noreferrer"
          alt="gitLink"
        >
          is open-sourced on GitHub {""}
        </a>{" "}
        and {""}
        <a
          href="https://festive-bose-62cc2d.netlify.app/"
          target="_blank"
          alt="netlifyLink"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
