import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={require('../assets/pic.jpg__1_-removebg-preview (1).png')}
          alt="Founder"
        />

        <h2>Ravi kumar saini</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com/mr_ravi_79" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/mr_ravi_79" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/ravisaini79" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
