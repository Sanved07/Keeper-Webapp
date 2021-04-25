import React from "react";
let date = new Date();
let currentYear = date.getFullYear();
function Footer() {
  return (
    <footer>
      <p>Created by Sanved Hambarde</p>
      <p> Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
