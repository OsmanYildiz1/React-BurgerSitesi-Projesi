import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          consequuntur fugiat id ut, harum dolor quod illo blanditiis corrupti
          quibusdam porro, odit a. Magni ab, id officiis libero itaque ad. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          quibusdam facilis rerum cum, possimus fugit molestiae voluptatibus
          iure laudantium distinctio hic officia velit numquam doloremque saepe
          commodi excepturi iusto quae? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Architecto magni, exercitationem est voluptatem
          consequatur voluptate non rem, accusantium provident recusandae ex sit
          iste omnis, fuga accusamus veniam dicta vero deserunt.
        </p>
      </div>
    </div>
  );
}

export default About;
