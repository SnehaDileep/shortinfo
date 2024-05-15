import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";



const firstSummary =
  "I am a recent graduate with a bachelor’s degree in computer applications. am a recent graduate with a bachelor’s degree in computer applications. This academic journey equipped me with a comprehensive understanding of the fundamental principles of software development. when I discovered my passion for web designing and development. To further hone my skills and knowledge in this field, I embarked on a six-month intensive training program in Full Stack Development (MERN), where I gained hands-on experience in building dynamic and responsive web applications using the React framework. This specialized training in the MERN stack, encompassing MongoDB, Express.js, React, and Node.js. My expertise extends to front-end technologies, including HTML, CSS, JavaScript, as well as frameworks like React, Angular, and Bootstrap. Additionally, I possess basic knowledge in using design tools such as Figma."
  const secondSummary = 
  "Currently, I am immersed in a valuable learning experience as an Angular Front-End Developer Intern at ChemX Education. Within this role, I collaborate closely with a dynamic team to develop and maintain user interfaces for an educational platform. This hands-on experience has allowed me to deepen my expertise in Angular and frontend development, as well as sharpen my problem-solving and teamwork skills. Through my internship at ChemX Education, I am gaining practical insights into real-world development scenarios, contributing to the enhancement of user experiences and interface functionalities. I am dedicated to delivering high-quality solutions that align with the organization's goals and objectives while continuously expanding my expertise in Angular and frontend technologies.With a strong foundation in software development principles and a passion for creating user-centric web applications, I am poised to embark on a fulfilling career in the ever-evolving field of technology, contributing to impactful projects and driving positive change in the digital landscape."
  const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">

         {/* contain information.The content starts from an off-screen position and animates into view. */}
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
            <p>{firstSummary}</p>
            <h2>Front End Developer Internship at ChemX Education</h2>
            <br />
            <br />
            <p>{secondSummary}</p>
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
          </Animate>
        </div>

        {/*contains a set of icons representing various services or technologies*/}
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
