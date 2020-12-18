import React from "react";

import image from "../../Resources/images/back.png";
import image1 from "../../Resources/images/electro.png";

import "./Works.scss";
import ProjectCard from "../../Utils/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";

const array = [
  {
    link: "https://cheapestflight.herokuapp.com/",
    name: "Cheapest Flights",
    description:
      "it's a web application that gets the flight coordinates and its date so it can display the cheapest flights!it's web application that gets the the airports location and the date of a flight so it can display the cheapest flights!",
    tech: [
      "Reactjs",
      "Redux",
      "Node.js",
      "Sass",
      "MongoDB",
      "ExpressJs",
      "SkyScanner API",
    ],
    image:
      "https://abdobaad9991-gmail.tinytake.com/media/eb4dd6?filename=1607067602297_2_637426642379517608.png&sub_type=thumbnail_preview&type=attachment&width=1200&height=556%22%20title=%22Powered%20by%20TinyTake%20Screen%20Capture%22",
    githubRepo: "https://github.com/abdobaad/fligh-high",
  },
  {
    link: "https://mymoviesflixapp.herokuapp.com/",
    name: "MyFlixMovies",
    description:
      "This is a search movies website connected to THE MOVIES DATA BASE, the design and the code it's all by me,I hope you like it.",
    tech: [
      "Reactjs",
      "Redux",
      "Node.js",
      "Sass",
      "MongoDB",
      "ExpressJs",
      "The Movie DB",
    ],
    image,
    githubRepo: "https://github.com/abdobaad/myfilxmovie",
  },
  {
    link: "https://electrohanot-app.herokuapp.com/",
    name: "ElectroHanota",
    description:
      "This is an e-commerce full-stack website built with the MERN stack , the design and the code it's all by me,I hope you like it.",
    tech: ["Reactjs", "Redux", "Node.js", "Sass", "MongoDB", "ExpressJs"],
    image: image1,
    githubRepo: "https://github.com/abdobaad/hanotelectro-mernapp",
  },
];

const Works = () => {
  return (
    <div id="work" className="works_container">
      <Fade left>
        <div className="title-container">
          <h1>Some things I've Built</h1>
          <div className="line" />
        </div>
      </Fade>
      {array.map((project, i) =>
        i % 2 === 0 ? (
          <ProjectCard key={i} type="left" project={project} />
        ) : (
          <ProjectCard key={i} type="right" project={project} />
        )
      )}
    </div>
  );
};

export default Works;
