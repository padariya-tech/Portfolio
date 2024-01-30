import React from "react";
import "./About.css";
import Jump from 'react-reveal/Jump'
// import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="../../public/profile.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I'm Nij Padariya, currently diving into the world of M.Tech in Computer Science and Engineering at IIT Kanpur. I'm a first-year student hailing from Gujarat, and my heart lies in development. Beyond the coding challenges, you'll find me on the sports field, soaking in the joy of a good game. I'm passionate about becoming a great software developer, and every day at IIT Kanpur is a step toward that goal. Exciting times ahead as I navigate through the academic maze and pursue my dreams in the tech world!
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;