import React from "react";
import '../styles/Projects.css'
const Card = ({ websiteLink, imageSrc, title }) => {
    return (
        <div className="card">
            {imageSrc && <img className="card-image" src={imageSrc} alt={title} />}
            <a className="webLink" href={websiteLink} target="_blank" rel="noopener noreferrer">
                {`Visit ${title}`}
            </a>
        </div>
    );
};

export default Card;