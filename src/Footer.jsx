import React from "react";
import FooterDiv, { FooterCr } from "../src/style/FooterStyles";

function Footer() {
  return (
    <FooterDiv>
      <FooterCr>
        <p>Copyright 2020 NASA</p>
      </FooterCr>
      <div className="footer-icons">
        <a href="https://www.instagram.com/nasa/?hl=en">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCLA_DiR1FfKNvjuUpBHmylQ">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </FooterDiv>
  );
}

export default Footer;
