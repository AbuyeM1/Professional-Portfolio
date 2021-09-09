import React from "react";
import ContactPNG from "../assets/contact.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import resume from "../assets/resume.png";

function ContactCard() {
  return (
    <div className="contact-card">
      <div className="card-content">
        <h1 className="text-center">Contact Me</h1>

        <img
          src={ContactPNG}
          alt="profile-photo"
          className="contact-profile "
        ></img>

        <footer>
          <div className="socials">
            <a
              className="contact-img"
              href="https://www.linkedin.com/in/abuye-mamuye-5a49921b0/"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a target="_blank" href="https://github.com/AbuyeM1">
              <img src={github} alt="Github" />
            </a>
            <a href="mailto:abuye20@yahoo.com">
              <img src={email} alt="Email" />
            </a>
            <a href="https://drive.google.com/file/d/1lMZcQvq4RDS78WXkjAslJuHMlc9achwz/view?usp=sharing">
              <img src={resume} alt="profile-photo"></img>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ContactCard;
