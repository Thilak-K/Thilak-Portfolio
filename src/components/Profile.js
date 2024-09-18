import React, { useState } from "react";
import profilepicture from "./images/profile-picture.jpg";
import leetcodeLogo from "./images/leetcode.png"; // LeetCode logo image
import metafrontend from "./PDF/Meafronend.pdf"; // Adjust paths accordingly
import Metajs from "./PDF/Metajs.pdf";
import udemyjs from "./PDF/udemyjs.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./Profile.css"; // Updated the CSS file name

const ProfileProfile = () => {
  const [activeSection, setActiveSection] = useState("profile-profile-details");


  const renderContent = () => {
    const content = {
      "education": (
        <div className="education-details">
          {[
            {
              title: "College",
              details: [
                { label: "Name", value: "Karpagam College of Engineering, Coimbatore" },
                { label: "Course", value: "Electronics and Engineering" },
                { label: "CGPA", value: "7.31" },
                { label: "Location", value: "Coimbatore" }
              ]
            },
            {
              title: "12th Grade",
              details: [
                { label: "School", value: "Akshaya Academy, Oddanchatram" },
                { label: "District", value: "Dindigul" },
                { label: "Percentage", value: "81.4%" },
                { label: "Board", value: "Central Board of Secondary Education" },
                { label: "Group", value: "Biology Maths" }
              ]
            },
            {
              title: "10th Grade",
              details: [
                { label: "School", value: "Akshaya Academy, Oddanchatram" },
                { label: "District", value: "Dindigul" },
                { label: "Percentage", value: "81.2%" },
                { label: "Group", value: "General" }
              ]
            }
          ].map(({ title, details }) => (
            <div className="highlight" key={title}>
              <h3>{title}</h3>
              {details.map(({ label, value }) => (
                <p key={label}>
                  <span className="label">{label}:</span> {value}
                </p>
              ))}
            </div>
          ))}
        </div>
      ),
      "accounts": (
  <div className="accounts-details">
    <div className="social-media">
      <h3>Social Media</h3>
      {[
        {
          icon: <FaWhatsapp />,
          text: "Whatsapp",
          link: "https://api.whatsapp.com/send/?phone=919585223129&text&type=phone_number&app_absent=0",
          label: "ThilakRaj",
        },
        {
          icon: <FaInstagram />,
          text: "Instagram",
          link: "https://www.instagram.com/kaliht_k/",
          label: "kaliht-k",
        },
        {
          icon: <FaFacebook />,
          text: "Facebook",
          link: "https://www.facebook.com/profile.php?id=61557632663724",
          label: "Kaliht K",
        },
        {
          icon: <FaTwitter />,
          text: "Twitter",
          link: "https://x.com/ThilakRaj3129",
          label: "ThilakRaj3129",
        },
      ].map(({ icon, text, link, label }) => (
        <p key={text}>
          <span className="icon">{icon}</span> {/* Wrap icon in a span */}
          <span className="text">{text}:</span> {/* Wrap text in a span */}
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ) : (
            label
          )}
        </p>
      ))}
    </div>

    <div className="education-related">
      <h3>Education Related</h3>
      {[
        {
          icon: <FaGithub />,
          text: "GitHub",
          link: "https://github.com/Thilak-K",
          label: "Thilak-K",
        },
        {
          icon: <FaLinkedin />,
          text: "LinkedIn",
          link: "https://www.linkedin.com/in/thilakraj-k/",
          label: "Thilak Raj",
        },
        {
          icon: <img src={leetcodeLogo} alt="LeetCode" className="icon" />,
          text: "LeetCode",
          link: "https://leetcode.com/u/Thilak-K/",
          label: "Thilak-K",
        },
      ].map(({ icon, text, link, label }) => (
        <p key={text}>
          <span className="icon">{icon}</span> {/* Wrap icon in a span */}
          <span className="text">{text}:</span> {/* Wrap text in a span */}
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ) : (
            label
          )}
        </p>
      ))}
    </div>
  </div>


      ),
      certification: (
        <div className="certification-details">
          <h3>My Certifications</h3>
          <div className="certificate-list">
            <div className="certificate-item">
              <p>Meta Front-End Developer Certificate</p>
              <a href={metafrontend} target="_blank" rel="noopener noreferrer">
                View/Download
              </a>
            </div>
            <div className="certificate-item">
              <p>Meta JavaScript Developer Certificate</p>
              <a href={Metajs} target="_blank" rel="noopener noreferrer">
                View/Download
              </a>
            </div>
            <div className="certificate-item">
              <p>Udemy JavaScript Certificate</p>
              <a href={udemyjs} target="_blank" rel="noopener noreferrer">
                View/Download
              </a>
            </div>
          </div>
        </div>
      )
      ,
      "profile-profile-details": (
        <div className="profile-profile-details highlight">
          {[
            { label: "Name", value: "Thilak Raj" },
            { label: "Date of Birth", value: "March 31, 2002" },
            { label: "Age", value: "22 years" },
            { label: "Phone Number", value: "+91 9585223129" },
            { label: "Email", value: "thilakofficials@gmail.com" },
            { label: "Occupation", value: "Student" },
            { label: "Address", value: "ThilakRaj Kasinathan , RoseBeautiCare, Dharapuram Road, Oddanchatram." },
            { label: "District", value: "Dindigul" },
            { label: "State", value: "Tamil Nadu" },
            { label: "Nationality", value: "Indian" }
          ].map(({ label, value }) => (
            <p key={label}>
              <span className="label">
                {label}:
              </span>{" "}
              {value}
            </p>
          ))}
        </div>
      ),
    };

    return content[activeSection] || content["profile-profile-details"];
  };

  return (
    <div className="profile-profile-page">
      <div className="profile-profile-pic">
        <div className="profile-profile-picture">
          <img className="profile-profile-img" src={profilepicture} alt="Profile" />
          <div className="profile-profile-down">
            <div className="name-share">
              <h1>Thilak Raj</h1>
              <button type="button" className="share-button">Share</button>
            </div>
            <div className="profile-profile-follow">
              <button type="button" className="follow-button">Follow</button>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/Thilak-K"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-github"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/thilakraj-k/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-linkedin"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-profile-content">
        <div className="profile-profile-header">
          <h2>Thilak Raj K</h2>
          <p>B.E. Electronics and Communication Engineering (ECE)</p>
          <p>Karpagam College of Engineering, Coimbatore, Tamil Nadu</p>
        </div>
        <div className="profile-profile-tabs">
          {["profile", "education", "accounts", "certification"].map(section => (
            <div
              key={section}
              className={`tab ${activeSection === section ? "active" : ""}`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
            </div>
          ))}
        </div>
        <div className="profile-profile-content-area">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ProfileProfile;
