import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

//The navigate function is used from the useNavigate hook,  from a routing library like react-router-dom
const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToAboutMePage = () => {
    navigate("/about");
  };

  return (
    //PageHeaderContent component is used to create a consistent header style with a title and an icon
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Sneha
          <br />
          Aspiring Front end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__about-me">
          <button onClick={handleNavigateToAboutMePage}>About Me</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
