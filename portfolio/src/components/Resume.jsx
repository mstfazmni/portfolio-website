import React from "react";
import '../styles/Resume.css';

const Resume = () => {

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'mostafa-zamani-cv.pdf';
        link.click();
    };

    return (
        <div className="container">
            {/* Left Section */}
            <section className="left-sec">
                <h2>Resume & Career Highlights</h2>
                <p className="intro-p">
                    I'm a passionate software developer specializing in building dynamic and user-centric web applications using cutting-edge technologies like React, Node.js, and MongoDB. My journey in tech started with an intrinsic curiosity for problem-solving, and I've continuously honed my skills in both frontend and backend development to craft seamless user experiences with robust, scalable architectures.
                </p>
                <p className="intro-p">
                    As a collaborative team player, I focus on delivering scalable and impactful solutions while learning and adopting new technologies. With a solid foundation in full-stack development, I bridge the gap between elegant frontend designs and optimized backend performance, ensuring that both aspects work in harmony to deliver top-notch digital experiences.
                </p>
            </section>
            {/* Right Section */}
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
};

export default Resume;
