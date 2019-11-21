import React from "react";

const Footer = props => {
  let classList = "nav";
  return (
    <div className="footer">
      Data for Games API gathered from{" "}
      <a
        className="link"
        href="https://www.boardgameatlas.com/api/docs"
        target="_blank"
        rel="noopener noreferrer"
      >
        Board Game Atlas
      </a>
    </div>
  );
};

export default Footer;
