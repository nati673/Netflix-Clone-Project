import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footercon">
        <ul className="list1">
          <a className="txx" href="">
            <h5 className="ennd">Questions? Contact us.</h5>
          </a>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Speed Test</a>
          </li>
          <li>
            <h2 className="ennd">Netflix US</h2>
          </li>
        </ul>
        <ul className="list1">
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
        </ul>
        <ul className="list1">
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Ways to Watch</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
          <li>
            <a href="#">Only on Netflix</a>
          </li>
        </ul>
        <ul className="list1">
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
