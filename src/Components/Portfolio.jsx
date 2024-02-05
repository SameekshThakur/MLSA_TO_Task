/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/student-849825_1280.jpg";

const imageAltText = "This is an image of a desk with a laptop, notebook, and pen. It is a creative space for someone to work and create.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "MovieFlixx Application 🎉",
    description:
      "This is a web application, which showcases the ratings of the latest movies, and shows to the users. It is built using vanilla , and uses the TMDB API to fetch the data.",
    url: "https://st-flixx-app.vercel.app/",
  },
  {
    title: "OmniFood Website",
    description:
      "OmniFood Web Application is an example of the modern website with best responsive design practises, which is built using HTML5, CSS3.",
    url: "https://st-omnifood-app.netlify.app/",
  },
  {
    title: "My Resume Site",
    description:
      "This is my personal website which showcases my resume, my projects, testimonials and contact page. It is built using HTML5, Sass, Framer Motion and ReactJS. It is hosted on Netlify.",
    url: "https://st-portfolio-app.netlify.app/",
  },
  {
    title: "ToDo Application",
    description:
      "This is a simple ToDo application, which is built using JavaScript including all CRUD functionalities, and uses the local storage to store the data.",
    url: "https://todo-task-manager-list.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
