import React from "react";
import Profile from "../../src/assets/AbuyeImage.png";
import { motion } from "framer-motion";

function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="about-container">
          <h3>About Me</h3>

          <img
            src={Profile}
            alt="profile-photo"
            className="profile float-left"
          ></img>
          <div>
            <div className="mt-3">
              <h6>I am a Full stack Web Developer.</h6>
              <h6>
                I Attended a coding boot camp class at UC Berkeley extension
                Boot Camp. I am a fast learner, hardworking, friendly, and
                team-oriented person.
              </h6>
              <h6>
                I have excellent customer service skills. I worked as an uber
                driver, a shift supervisor at Safeway, and a draftsman in
                Ethiopia. My Job experiences helped me develop excellent
                leadership, team building, and communication skills.
              </h6>
              <h6>
                I enjoy nature photography and hikes. I have traveled around the
                bay to capture pictures. I enjoy watching the sunset at the
                beach and watching the sunrise from the mountain top. I have not
                watched many sunrises because I am just at the beginning of my
                hiking journey. I hope to visit more places.
              </h6>
              <h6>
                I am passionate about social justice and social inequalities. I
                believe in having conversations and lifting everyone regardless
                of their racial, social, economic, and sexual background.
              </h6>

              <h6>
                I am interested in learning about new opportunities and can be
                reached through this portfolio, by email:
                <a href="meilto:Abuye20@yahoo.com" style={{ color: "Red" }}>
                  Abuye20@yahoo.com,
                </a>
                through
                <a href="https://github.com/AbuyeM1" style={{ color: "Red" }}>
                  GitHub
                </a>
                , or through
                <a
                  href="https://www.linkedin.com/in/abuye-mamuye-5a49921b0/"
                  style={{ color: "Red" }}
                >
                  LinkedIn.
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutCard;
