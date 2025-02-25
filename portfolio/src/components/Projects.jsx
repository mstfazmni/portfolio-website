import React, { useState } from "react";
import '../styles/Projects.css';
import Card from '../components/Card';
import examplePic1 from "../asset/1.png";
import examplePic2 from "../asset/2.png";
import examplePic3 from "../asset/3.png";
import examplePic4 from "../asset/4.png";

const Projects = () => {
    const cards = [
        <Card websiteLink={"#"} imageSrc={examplePic4} title={"Task 1"} />,
        <Card websiteLink={"#"} imageSrc={examplePic1} title={"Task 2"} />,
        <Card websiteLink={"#"} imageSrc={examplePic2} title={"Task 3"}/>,
        <Card websiteLink={"#"} imageSrc={examplePic3} title={"Task 4"}/>,
    ]; 

    return (
        <div className="projects-cards-container">
            <div className="p-project">Project Showcase</div>
            <div className="cards-wrapper">
                {/* Render all cards */}
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        {card}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
