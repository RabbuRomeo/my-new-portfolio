import React from "react";
import "../Css/Home.css";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="portfolio">
        <div className="container">
          <h1>
            <a href="/">Shaik Rabbani Basha</a>
          </h1>
          <h2>
            I'm a passionate <span>Frontend Developer</span> from India
          </h2>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link active" href="#header">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a class="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a class="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            {/* <i class="bi bi-list mobile-nav-toggle"></i> */}
          </nav>

          <div class="social-links">
            <a href="#" class="twitter">
              <BsTwitter />
            </a>
            <a href="#" class="facebook">
              <BsFacebook />
            </a>
            <a href="#" class="instagram">
              <BsInstagram />
            </a>
            <a href="#" class="linkedin">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
