import React from "react";
import { Link } from "react-router-dom";
import "./HomeProjects.css";
import project1 from "../Assets/banner1.jpg";
import project2 from "../Assets/banner4.avif";
import project3 from "../Assets/banner5.avif";

const projects = [
  {
    id: 1,
    image: project1,
    title: "Commercial Building",
    category: "MEP Installation",
  },
  {
    id: 2,
    image: project2,
    title: "False Ceiling Work",
    category: "Corporate Office",
  },
  {
    id: 3,
    image: project3,
    title: "Swimming Pool",
    category: "Residential Project",
  },
];

const HomeProjects = () => {
  return (
    <section className="home-projects">
      <div className="home-projects-container">

        {/* HEADING */}
        <div className="projects-header">

          <div className="projects-heading">
            <div className="projects-small-title">
              <span>OUR PROJECTS</span>
              <div className="projects-title-line"></div>
            </div>

            <h2>Explore Recent Projects</h2>
          </div>

          <Link to="/projects" className="projects-view-btn">
            View All Projects
            <span>→</span>
          </Link>

        </div>


        {/* PROJECT CARDS */}
        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.id}>

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-gradient"></div>

              <div className="project-card-content">

                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>

                <Link
                  to="/projects"
                  className="project-arrow"
                  aria-label={`View ${project.title}`}
                >
                  →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HomeProjects;