import React from "react";

import image from "../../Resources/images/back.png";
import image1 from "../../Resources/images/electro.png";

import "./Works.scss";
import ProjectCard from "../../Utils/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";

const array = [
  {
    link: "https://mymoviesflixapp.herokuapp.com/",
    name: "MyFlixMovies",
    description:
      "This is a search movies website connected to THE MOVIES DATA BASE, the desing and the code it's all by me,I hope you like it.",
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
      "This is an e-commerce full-stack website built with the MERN stack , the desing and the code it's all by me,I hope you like it.",
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
          <h1>Some thing I'v Built</h1>
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
