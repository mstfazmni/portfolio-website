import React, { useState } from "react";
import '../styles/Projects.css';
import Card from '../components/Card';
import taskManagementImg from "../asset/task-management.jpg";

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        <Card websiteLink={"https://mz-task-management.netlify.app/"} imageSrc={taskManagementImg} title={"Task Management"} />,
        <Card websiteLink={"https://mz-task-management.netlify.app/"} imageSrc={taskManagementImg} title={"Task 2"} />,
        <Card websiteLink={"https://mz-task-management.netlify.app/"} imageSrc={taskManagementImg} title={"Task 3"}/>,
        <Card websiteLink={"https://mz-task-management.netlify.app/"} imageSrc={taskManagementImg} title={"Task 4"}/>,
        <Card websiteLink={"https://mz-task-management.netlify.app/"} imageSrc={taskManagementImg} title={"Task 5"}/>,
        <Card websiteLink={"https://mz-task-management.netlify.app/"} imageSrc={taskManagementImg} title={"Task 6"}/>
    ]; 

    return (
        <div className="projects-cards-container">
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
