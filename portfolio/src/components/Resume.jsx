import React from "react";
import '../styles/Resume.css';

const Resume = () => {

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'mostafa-zamani-cv.pdf';
        link.click();
    };

    return(
        <div className="container">
            {/* left section */}
            <section className="left-sec">
                <p className="intro-p">
                    Proficient full stack and windows developer with hands-on experience building dynamic,
                    responsive web applications using React, Node.js, and MongoDB.
                    I am skilled in crafting user-centric interfaces and maintaining scalable backend services.
                    Dedicated to learning emerging technologies and
                    delivering robust solutions in collaborative environments.
                </p>
            </section>
            {/* right section */}
            <section className="right-sec">
                <embed
                    src="/cv.pdf"
                    type="application/pdf"
                    width="100%"
                    height="100%"
                />
                <button onClick={handleDownloadResume} className="download-pdf">
                    Download Resume
                </button>
            </section>
        </div>
    );
}

export default Resume;
