
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Portfolio.css";
import profilePic from "./assets/profile5.jpeg";
import atsPic from "./assets/ats.PNG";
import cvPic from "./assets/cv.PNG";
import itPic from "./assets/it.png";

export default function Portfolio() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Puzzle State
  const [puzzleAnswer, setPuzzleAnswer] = useState("");
  const [isSolved, setIsSolved] = useState(false);
  const checkPuzzle = () => {
    if (puzzleAnswer.trim() === "7") {
      setIsSolved(true);
    } else {
      alert("Wrong answer! Try again.");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 text-gray-900 transition-colors duration-500">
      {/* Navbar */}
      <nav className="nav-container">
        <div className="nav-links">
          {[
            { label: "Home", link: "#home" },
            { label: "About", link: "#about" },
            { label: "Projects", link: "#projects" },
            { label: "Contact", link: "#contact" },
          ].map((item) => (
            <a key={item.label} href={item.link} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-languages">
          <label htmlFor="nav-language-select" className="nav-language-label">
            Languages:
          </label>
          <select id="nav-language-select" className="nav-language-select">
            <option>English</option>
            <option>Urdu</option>
            <option>German</option>
          </select>
        </div>
      </nav>

      <div className="flex flex-col items-center text-center">
        {/* Profile Section */}
        <div id="about" className="about-container">
          <div className="profile-image-container">
            <img src={profilePic} alt="Profile" className="profile-image" />
          </div>
          <div className="about-text-box">
            <p>
              I specialize in building responsive, Hello! I’m Abdul Haseeb Khan, a Computer Science
              graduate from SZABIST. I’m passionate about clean design and powerful functionality,
              and I specialize in building responsive, user-friendly applications using modern web
              technologies like React and Tailwind CSS
              user-friendly applications using modern web technologies such as React,
              Tailwind CSS, and Firebase. Whether you're looking for a sleek portfolio,
              an e-commerce platform, or a custom web tool, we’re here to provide scalable and
              innovative solutions tailored to your needs. At the heart of our company lies a
              commitment to quality, communication, and continuous improvement.<hr /><strong>B2B
              platform for Wharehouse</strong> (FYP) It is a e-commerce business platform. Our
              mission is to help businesses and individuals bring their ideas to life with intuitive
              digital experiences. We believe technology should be accessible and empowering, and we
              strive to make every project an opportunity to grow and excel together.
            </p>
          </div>
        </div>

        <h2 className="projects-heading">Projects-----Comming soon</h2>

        {/* Animation Boxes */}
        <div className="w-full max-w-xl">
          <style>
            {`
              .anim-box {
                width: 120px;
                height: 50px;
                background-color: #3b82f6;
                color: white;
                font-weight: bold;
                position: relative;
                animation: mymove 14s;
                animation-fill-mode: forwards;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 0.5rem;
                transition: transform 0.3s ease-in-out;
                cursor: pointer;
              }
              .anim-box:hover {
                transform: scale(1.1);
              }
              #div1 {animation-timing-function: linear;}
              #div2 {animation-timing-function: ease;}
              #div3 {animation-timing-function: ease-in;}
              #div4 {animation-timing-function: ease-out;}
              #div5 {animation-timing-function: ease-in-out;}
              #div6 {animation-timing-function: ease-in-out;}
              #div7 {animation-timing-function: ease-in-out;}
              @keyframes mymove {
                from {left: 0px;}
                to {left: 470px;}
              }
            `}
          </style>
          <div id="div1" className="anim-box" onClick={scrollToProjects}>React</div>
          <div id="div2" className="anim-box" onClick={scrollToProjects}>Kotlin</div>
          <div id="div3" className="anim-box" onClick={scrollToProjects}>Swift</div>
          <div id="div4" className="anim-box" onClick={scrollToProjects}>Python</div>
          <div id="div5" className="anim-box" onClick={scrollToProjects}>JavaScript</div>
          <div id="div6" className="anim-box" onClick={scrollToProjects}>Web-Dev</div>
          <div id="div7" className="anim-box" onClick={scrollToProjects}>2D-Assets</div>
        </div>

        {/* Certifications Section */}
        <h2 className="certifications-heading">Certifications</h2>
        <div className="certifications-container">
          <div className="cert-card">
            <img src={atsPic} alt="ATS Certificate" className="cert-image" />
            <h3 className="cert-title">ATS (Full-Stacks)</h3>
          </div>
          <div className="cert-card">
            <img src={cvPic} alt="CV Certificate" className="cert-image" />
            <h3 className="cert-title">CV</h3>
          </div>
          <div className="cert-card">
            <img src={itPic} alt="IT Certificate" className="cert-image" />
            <h3 className="cert-title">Java-script Certification</h3>
          </div>
          <div className="cert-card">
            <img src={itPic} alt="IT Certificate" className="cert-image" />
            <h3 className="cert-title">Internship Certification</h3>
          </div>
        </div>

        {/* About Section */}
        <div className="about-grid">
          <p>Hello! I’m a passionate developer who loves building apps and websites.</p>
          <p>Web-developer || Android-developer || Data-Analyst || IOS-developer ||</p>
          <p>My mission is to build clean, fast, and accessible user experiences.</p>
          <p>Check my Fiverr profile Pixelstar</p>
          <p>Let’s connect and create something amazing together!</p>
          <p>Yes, you can always reach me through my!</p>
        </div>

        {/* Message Form */}
        <form id="contact" ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required className="form-input" />
          <input type="email" name="user_email" placeholder="Your Email" required className="form-input" />
          <textarea name="message" placeholder="Send me a message..." required className="form-textarea"></textarea>
          <button type="submit" className="form-button">Send Message</button>
        </form>

        {/* Puzzle Protected Contact Info */}
        <div className="contact-info">
          {!isSolved ? (
            <div className="puzzle-box">
              <h3 className="contact-heading">🔐 Solve to Unlock Contact Info</h3>
              <p className="contact-detail">What is 3 + 4?</p>
              <input
                type="text"
                value={puzzleAnswer}
                onChange={(e) => setPuzzleAnswer(e.target.value)}
                placeholder="Enter answer"
                className="puzzle-input"
              />
              <button onClick={checkPuzzle} className="form-button">Submit</button>
            </div>
          ) : (
            <>
              <h3 className="contact-heading">1. Email</h3>
              <p className="contact-detail">haseebkhan645411@gmail.com</p>
              <h3 className="contact-heading">2. Contact No</h3>
              <p className="contact-detail">+92-0342-0529206</p>
            </>
          )}
        </div>

        {/* Social Links */}
        <div className="social-icons">
          <a href="https://github.com/haseebkhan645411" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="mailto:haseebkhan645411@gmail.com" className="social-link">
            <MdEmail />
          </a>
          <a href="https://linkedin.com/in/haseebkhan645411" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
        </div>

        <div className="empty-space"></div>
      </div>
    </div>
  );
}
