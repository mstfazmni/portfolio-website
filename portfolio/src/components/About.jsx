import React, { useEffect } from "react";
import '../styles/About.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const About = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const container = document.getElementById("container3D");

        const camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        
        camera.position.set(10, 10, 10);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(10, 10, 10).normalize();
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0x333333);
        scene.add(ambientLight);

        const loader = new GLTFLoader();
        loader.load(
            process.env.PUBLIC_URL + "/models/scene.gltf",
            function (gltf) {
                const object = gltf.scene;
                object.scale.set(2.1, 2.1, 2.1);
                scene.add(object);
            },
            undefined,
            function (error) {
                console.error(error);
            }
        );

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableRotate = false;  // Disable default rotate control
        controls.target.set(0, 0, 0);
        controls.maxPolarAngle = Math.PI / 2;
        controls.enableZoom = false;  // Disable zoom functionality

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const { offsetWidth, offsetHeight } = container;

            // Calculate rotation based on mouse position within the container
            const xRotation = (clientY / offsetHeight) * Math.PI - Math.PI / 2;
            const yRotation = (clientX / offsetWidth) * Math.PI - Math.PI / 2;

            // Update the camera's position to simulate hover rotation
            camera.position.x = 15 * Math.sin(yRotation) * Math.cos(xRotation);
            camera.position.y = 15 * Math.sin(xRotation);
            camera.position.z = 15 * Math.cos(yRotation) * Math.cos(xRotation);
            camera.lookAt(0, 0, 0);
        };

        container.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="about-div-container">

            <div id="container3D" className="container-3D"></div>
            <div className="introduction-div">
                <h1 className="h1-about">Mostafa Zamani - Software Developer</h1>
                <p className="p-about">
                    Hey there! I’m Mostafa, a software developer who turns code into captivating user experiences (with just a dash of magic).
                    Whether it’s crafting pixel-perfect designs or building seamless back-end solutions,
                    I bring a passion for clean, responsive, and engaging websites.
                    I’m here to tackle challenges, make the web a better place,
                    and maybe even save a few projects from the dreaded "Page Not Found."
                    Dive in to check out my work—let’s build something awesome together!
                </p>
            </div>
       
        </div>
    );
}

export default About;
