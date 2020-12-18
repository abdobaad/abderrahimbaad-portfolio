import React,{ useState } from "react";

import GitHubIcon from "../../Resources/icons/github1.svg";
import ExternalIcon from "../../Resources/icons/external.svg";

import "./ProjectCard.scss";
import { Fade } from "react-reveal";


const ProjectCard = ({ type, project }) => {
  const [imgHover,setImgHover] = useState(false);

  return (
    <Fade bottom>
      <div className={type}>
        <div className="card_container">
          <div className={`${type === 'left' ? 'bottom-box box-left' : 'bottom-box box-right'}`} />
          <a href={project.link} target="_blanc">
            <div className="card-image" style={{}}>
              <div className="hover-effect" />
              <div
                onMouseEnter={()=>setImgHover(true)}
                onMouseLeave={()=>setImgHover(false)}
                className="img"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPositionX: "center",
                }}
              />
            </div>
          </a>
          <div className="card-nfo">
            <div className="featured_project">Featured Project</div>
            <div className="project_title"> {project.name}</div>
            <div className="project_description">{project.description}</div>
            <div className="project_tech">
              {project.tech.map((tech, i) => (
                <div key={i} className="item">
                  {tech}{" "}
                </div>
              ))}
            </div>

            <div className="project_links">
              <a href={project.githubRepo} target="_blanc">
                <img src={GitHubIcon} alt="github-project" />
              </a>
              <a href={project.link} target="_blanc">
                <img src={ExternalIcon} alt="show-project" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectCard;
