import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa"; // Import the Gmail (envelope) icon from react-icons
import "./Hire.css";

const Hire = () => {
  const [isJobChecked, setIsJobChecked] = useState(false);
  const [isFreelancingChecked, setIsFreelancingChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (id === "job-checkbox") {
      setIsJobChecked(checked);
      if (checked) {
        setIsFreelancingChecked(false);
      }
    } else if (id === "freelancing-checkbox") {
      setIsFreelancingChecked(checked);
      if (checked) {
        setIsJobChecked(false);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="hire-page">
      <div className="hire-left">
        <div className="hire-heading">
          <h1>Hire Me</h1>
        </div>
        <p>
          Interested in working together? Whether you have a job opportunity or
          a freelance project in mind, I'm excited to hear from you. Please fill
          out the form on the right-hand side to let me know more about what
          you're looking for, and I'll get back to you as soon as possible.
        </p>

        <div className="email-contact">
          <h3> Reach me directly via email:</h3>

          <a
            href="mailto:thilakofficials@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-link"
          >
            <FaEnvelope className="email-icon" /> thilakofficials@gmail.com
          </a>
        </div>
      </div>
      <div className="hire-right">
        {!submitted ? (
          <form className="hire-form" onSubmit={handleSubmit}>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  id="job-checkbox"
                  checked={isJobChecked}
                  onChange={handleCheckboxChange}
                />
                Job
              </label>
              <label>
                <input
                  type="checkbox"
                  id="freelancing-checkbox"
                  checked={isFreelancingChecked}
                  onChange={handleCheckboxChange}
                />
                Freelancing
              </label>
            </div>

            {isJobChecked && (
              <div className="job-details">
                <input
                  className="common-input"
                  type="text"
                  placeholder="Company Name"
                  required
                />
                <input
                  className="common-input"
                  type="text"
                  placeholder="Role"
                  required
                />
                <input
                  className="common-input"
                  type="text"
                  placeholder="Location"
                  required
                />
              </div>
            )}

            {isFreelancingChecked && (
              <div className="freelancing-details">
                <select
                  id="freelancing-select"
                  className="common-input freelancing-select"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="website">Website Build</option>
                  <option value="app">Application Build</option>
                  <option value="consultancy">Consultancy</option>
                </select>
                <textarea
                  className="common-input"
                  placeholder="Project Description"
                  required
                ></textarea>
              </div>
            )}

            <button type="submit" className="hire-submit-button">
              Submit
            </button>
          </form>
        ) : (
          <div className="thank-you-content">
            <h1>Thank You!</h1>
            <p>I will contact you soon.</p>
            <button className="back-button" onClick={handleBackButtonClick}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hire;
