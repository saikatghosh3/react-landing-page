import React from "react";
import { Github, Twitter, Linkedin, Newspaper } from "lucide-react"; 
import logo from "../assets/img/logo.svg"; 
import img1 from "../assets/img/america.png"; 
import img2 from "../assets/img/german.png"; 
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/*These are  Top 3 Columns */}
      <div className="footer-columns">
        {/*  This is Column 1: Contact */}
        <div className="col col-1">
          <h3 className="col-title">Contact</h3>
          <p className="mt-8 strong-line">Tell us everything</p>
          <p className="muted">
            Do you have any question? Feel free to reach out.
          </p>

          <div className="spacer-24" />
          <h4 className="sub-title">Address</h4>
          <address className="address">
            Rancho Santa Margarita
            <br />
            2131 Elk Street
            <br />
            California
          </address>
        </div>

        {/*  This is Column 2: Policy & Company */}
        <div className="col col-2">
          <h3 className="col-title">Policy</h3>
          <ul className="link-list">
            <li><a href="#application-security" className="wavy">Application Security</a></li>
            <li><a href="#software-principles" className="wavy">Software Principles</a></li>
          </ul>

          <div className="spacer-24" />

          <h3 className="col-title">Company</h3>
          <ul className="link-list">
            <li><a href="#about" className="wavy">About</a></li>
            <li><a href="#blog" className="wavy">Blog</a></li>
            <li><a href="#press" className="wavy">Press</a></li>
            <li><a href="#career-culture" className="wavy">Career & Culture</a></li>
          </ul>
        </div>

        {/* This is  Column 3: Support & Language */}
        <div className="col col-3">
          <div className="empty-space" />
          <ul className="link-list">
            <li><a href="#support-center" className="wavy">Support Center</a></li>
            <li><a href="#customer-support" className="wavy">Customer Support</a></li>
          </ul>

          <div className="spacer-24" />
          <h3 className="col-title">Language</h3>
          <div className="language-wrap">
            <img src={img1} alt="USA Flag" className="flag-round" />
            <img src={img2} alt="Germany Flag" className="flag-round" />
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Footer bottom  section */}
      <div className="footer-bottom">
        <div className="brand">
          <img src={logo} alt="Landy logo" className="brand-logo" />
        </div>

        <div className="social-actions">
          <a href="https://github.com/" aria-label="GitHub" className="icon-link"><Github size={20} /></a>
          <a href="https://twitter.com/" aria-label="Twitter" className="icon-link"><Twitter size={20} /></a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="icon-link"><Linkedin size={20} /></a>
          <a href="https://medium.com/" aria-label="Medium" className="icon-link"><Newspaper size={20} /></a>
          <button type="button" className="coffee-btn">☕ Buy me a coffee</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
