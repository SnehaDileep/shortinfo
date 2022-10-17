import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

// const personalDetails = [
//   {
//     label: "Name",
//     value: "Sneha Dileep",
//   },
//   {
//     label: "Age",
//     value: "22",
//   },
//   {
//     label: "Address",
//     value: "Anekdotgatan 13, 42241 Göteborg",
//   },
//   {
//     label: "Email",
//     value: "dileepsneha99@gmail.com",
//   },
//   {
//     label: "Contact No",
//     value: "+46 738036259",
//   },
// ];

const jobSummary =
  "I am a recent graduate holding a Bachelor's degree in BCA (Bachelor of Computer Application, 2018- 2021) from KMM College of Arts and science under Mahatma Gandhi University, Kerala India. Since I discovered that I am interested in web designing and development, I Joined a six-month (18 October 2021 to 26 March 2022) Intensive training in Full Stack (MERN) Development from ICT (Information and Communication Technology) Academy of Kerala is an organization established by Government of Kerala, India. MERN stack training aided me to develop high-quality web applications using JavaScript. The core technologies define the MERN stack are MongoDB, Express.js, React, and Node.js - all are based on one language, JavaScript.Also, I'm a dedicated and passionate about Front End Development with strong desire to learn the field in and out for producing high-quality creative projects. The six-month specialization in MERN stack helped me to build a strong ability in HTML, CSS, Bootstrap, JavaScript, React, UX/UI design, responsive web design and animation."
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            {/* <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul> */}
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
