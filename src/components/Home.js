import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import CV from "./PDF/Thilak Raj-Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

// Skill icons
import cIcon from "./images/c-icon.png";
import javaIcon from "./images/java-icon.png";
import awsIcon from "./images/aws-icon.png";
import htmlIcon from "./images/html-icon.png";
import cssIcon from "./images/css-icon.png";
import javascriptIcon from "./images/javascript-icon.png";
import reactIcon from "./images/react-icon.png";
import expressIcon from "./images/express-icon.png";
import mongodbIcon from "./images/mongodb-icon.png";

// Skills data
const skills = [
  { name: "C", image: cIcon },
  { name: "Java", image: javaIcon },
  { name: "AWS", image: awsIcon },
  { name: "HTML", image: htmlIcon },
  { name: "CSS", image: cssIcon },
  { name: "JavaScript", image: javascriptIcon },
  { name: "React", image: reactIcon },
  { name: "Express", image: expressIcon },
  { name: "MongoDB", image: mongodbIcon },
];

// Social media links
const socialLinks = [
  { platform: "Instagram", icon: faInstagram, url: "https://www.instagram.com" },
  { platform: "Twitter", icon: faTwitter, url: "https://www.twitter.com" },
  { platform: "WhatsApp", icon: faWhatsapp, url: "https://wa.me/qr/MQIJXPRXRQ4WO1" },
  { platform: "Facebook", icon: faFacebook, url: "https://www.facebook.com" },
];

const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    axios
      .post("http://localhost:5000/send-email", data)
      .then((response) => {
        alert(response.data.message);
        form.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("There was an error sending your message. Please try again.");
      });
  };

  return (
    <div>
      <Navbar />

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="home-wrapper">
          <div className="home-intro">
            <h1>
              Hello, I'm{" "}
              <Link to="/profile" className="highlighted-name">
                Thilak Raj
              </Link>
            </h1>
            <p>Web Developer | UI/UX Enthusiast</p>
            <a href={CV} download className="cv-button">
              Download CV
            </a>
          </div>
          <div className="profile-picture-container">
            <img
              src="path-to-your-profile-picture"
              alt="Profile"
              className="profile-picture"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-container">
        <div className="experience-content">
          <h1>Coming Soon</h1>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="skills-topic">
            <h1>My Skills</h1>
            <p>What can I do best?</p>
          </div>
          <div className="skills-flex-wrap">
            {skills.map((skill, index) => (
              <div key={index} className="skills-skill-item">
                <div className="skills-card">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="skills-icon"
                  />
                  <span className="skills-name">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="project" className="project-container">
        <div className="project-content">
          <h1>Coming Soon</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-text">
            <h1>Get in touch</h1>
            <p>
              I would love to hear from you! Whether you have a question, a
              project idea, or just want to say hello, feel free to reach out.
              I'm always open to discussing new opportunities and connecting
              with people.
            </p>
            <div className="contact-social-media">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={link.icon} /> {link.platform}
                </a>
              ))}
            </div>
          </div>
          <div className="contact-gap"></div>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <div className="contact-form-button">
              <button className="contact-send-button" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
