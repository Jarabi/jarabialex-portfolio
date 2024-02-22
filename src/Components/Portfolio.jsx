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
import image from "../images/scissors-envelope-pencil.jpg";

const imageAltText = "gray scissor with envelope and pencils";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Asset Inventory Management",
    description: "Manage assets end-to-end with IT asset management software.",
    url: "https://aim-pro.netlify.app/",
  },
  {
    title: "Portfolio Project Blog",
    description: "My first portfolio project.",
    url: "https://hashnode.com/edit/clp45qis600000ajmg6yx03gt",
  },
  {
    title: "How browsing works: DNS and the domain name system",
    description: "What happens when you type google.com in your browser and press Enter?.",
    url: "https://hashnode.com/edit/clmmc05by000208ifep4mg9wu",
  },
  {
    title: "React JavaScript Concepts: The Fundamentals",
    description: "Key JavaScript components to grasp before you dive into React.",
    url: "https://hashnode.com/edit/ckyarbri3080lnzs1bey38a7i",
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
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
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
