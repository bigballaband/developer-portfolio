"use client";

import React from "react";
import { FaWeightHanging, FaChartLine, FaCalendarAlt, FaBook, FaVideo, FaHistory, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function LiftAndChillPage() {
  return (
    <div className="lift-chill-page">
      <div className="container">
        {/* Header */}
        <div className="project-header-section">
          <Link href="/#projects" className="back-link">
            ← Back to Projects
          </Link>
          <div className="project-title-section">
            <img 
              src="/liftandchill.png" 
              alt="Lift & Chill Logo" 
              className="project-logo"
            />
            <div>
              <h1>Lift & Chill</h1>
              <p className="tagline">Track training, sets, and progress with a simple clean app</p>
            </div>
          </div>
        </div>

        {/* What it is */}
        <section className="project-section">
          <h2>What it is</h2>
          <p>
            A web app where users log workouts, view their progress, and check a full exercise library.
            It keeps track of sets, RPE, loads, and estimated maxes.
            There is a calendar view, a dashboard with charts, and a full history for each exercise.
          </p>
        </section>

        {/* Screenshots */}
        <section className="project-section">
          <div className="screenshots-grid">
            <img 
              src="/lift-chill-screenshot-1.png" 
              alt="Lift & Chill Dashboard" 
              className="screenshot"
            />
            <img 
              src="/lift-chill-screenshot-2.png" 
              alt="Lift & Chill Workout Log" 
              className="screenshot"
            />
            <img 
              src="/lift-chill-screenshot-3.png" 
              alt="Lift & Chill Exercise Library" 
              className="screenshot"
            />
          </div>
        </section>

        {/* Features */}
        <section className="project-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <FaWeightHanging className="feature-icon" />
              <h3>Log sets</h3>
              <p>Track weight, reps, and RPE for every set</p>
            </div>
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <h3>Auto estimated 1RM</h3>
              <p>Uses a smart formula to calculate your max</p>
            </div>
            <div className="feature-item">
              <FaCalendarAlt className="feature-icon" />
              <h3>Calendar view</h3>
              <p>See all your training days at a glance</p>
            </div>
            <div className="feature-item">
              <FaBook className="feature-icon" />
              <h3>Exercise library</h3>
              <p>Best sets, body area diagram, and video for each exercise</p>
            </div>
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <h3>Charts</h3>
              <p>Volume and main lifts progress over time</p>
            </div>
            <div className="feature-item">
              <FaHistory className="feature-icon" />
              <h3>Templates</h3>
              <p>Save common workouts for quick access</p>
            </div>
          </div>
        </section>

        {/* Design */}
        <section className="project-section">
          <h2>Design</h2>
          <p>Dark UI with neon accents for a clean, modern look</p>
        </section>

        {/* Live Site Link */}
        <section className="project-section">
          <div className="project-links-section">
            <a 
              href="https://lift-and-chill.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="live-site-link"
            >
              <FaExternalLinkAlt />
              <span>Visit Live Site</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
