import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3 className="title">Contact</h3>

        <div className="first_section">
          <p className="tc pb4">Want to get in touch?</p>
          <a href="mailto:Abuyeye3@gmail.com" className="btn btn-outline-info">
            Email Me
          </a>
        </div>

        <section>
          <ul className="icons h1">
            <li>
              <a href="mailto:Abuyeye3@gmail.com" className="fas fa-envelope">
                <br />
              </a>
              <p>Email</p>
            </li>
            <li>
              <a href="https://github.com/AbuyeM1" className="fab fa-github">
                <br />
              </a>
              <p>Github</p>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abuye-mamuye-5a49921b0/"
                className="fab fa-linkedin"
              >
                <br />
              </a>
              <p>Linkedin</p>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1jW1Q0hxQENzL2jQ4BploA2ac6frxrduz/view?usp=sharing"
                className="fas fa-file"
              >
                <br />
              </a>
              <p>Resume</p>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default Contact;
