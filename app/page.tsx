"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaEnvelope, FaCode, FaChess } from "react-icons/fa";
import { FcBullish, FcCalculator } from "react-icons/fc";

const LoadingScreen: React.FC<{ isLoading: boolean }> = ({ isLoading }) => (
  <div id="loading-screen" className={isLoading ? "" : "hidden"}>
    <div className="spinner"></div>
  </div>
);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [h1Typed, setH1Typed] = useState(false); // Track if h1 typing is done
  const [h2Typed, setH2Typed] = useState(false); // Track if h2 typing is done

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = "Thomas Thangarajah's Portfolio";
  }, []);
  // Apply dark mode directly
  useEffect(() => {
    document.body.className = "dark-mode"; // Permanently set dark mode
  }, []);

  // Typewriter effect for h1
  useEffect(() => {
    const h1Timer = setTimeout(() => setH1Typed(true), 2000); // Adjust timing as needed
    return () => clearTimeout(h1Timer);
  }, []);

  // Typewriter effect for h2 (starts after h1 is done)
  useEffect(() => {
    if (h1Typed) {
      const h2Timer = setTimeout(() => setH2Typed(true), 3000); // Adjust timing as needed
      return () => clearTimeout(h2Timer);
    }
  }, [h1Typed]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <div>
          {/* Modern Header */}
          <header>
            <h1 className={h1Typed ? "finished" : ""}>Thomas Thangarajah</h1>
            <h2 className={h2Typed ? "finished" : ""}>
              Computational Mathematics and Statistics at University of Waterloo
            </h2>
          </header>

          {/* About Section */}
          <section id="about">
            <h3>Welcome to my Portfolio!</h3>
            <p>
              I am currently in my third-year at the University of Waterloo, pursuing Computational Mathematics and
              Statistics. I am looking for an internship for Summer 2025. Check out my projects below!
            </p>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <h3>Projects</h3>
            <ul>
              <li>
                <h4>CxC Data Hackathon Project <FcBullish /> </h4>
                <p>Preprocessed a large dataset and created a Markov Chain model that had an accuracy of 54%.</p>
                <a href="https://cxc-federato.streamlit.app/" target="_blank">View Dashboard</a>
              </li>
              <li>
                <h4>Research Paper <FcCalculator /> </h4>
                <p>A research paper created by me and Dr. Peter Zizler from Mount Royal University for data analysis on NBA teams performance using Singular Value Decomposition.</p>
                <a href="https://github.com/bigballaband/ResearchProject" target="_blank">View Notebook</a>
              </li>
              <li>
                <h4>Chess Game <FaChess /></h4>
                <p>A group project where we created a Chess game with 3 bots. It includes a text interface and a graphical interface.</p>
                <a href="https://github.com/bigballaband/Chess" target="_blank">View Github Repo</a>
              </li>
            </ul>
          </section>

          {/* Modern Footer */}
          <footer>
            <div className="footer-links">
              <a href="https://leetcode.com/u/bigballaband/" target="_blank">
                <FaCode />
              </a>
              <a href="https://github.com/bigballaband" target="_blank">
                <FaGithub />
              </a>
              <a href="mailto:tomthaya5@gmail.com">
                <FaEnvelope />
              </a>
            </div>
            <p>© 2025 Thomas Thangarajah | All Rights Reserved</p>
          </footer>
        </div>
      )}
    </>
  );
};

export default Home;