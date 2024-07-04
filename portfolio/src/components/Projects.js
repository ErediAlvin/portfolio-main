import React from 'react';
import './Section.css';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h1>Projects</h1>
    </section>
  );
};

export default function Projects() {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <ul>
        <li>
          <h2>Project 1</h2>
          <p>
            A brief description of Project 1. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </li>
        <li>
          <h2>Project 2</h2>
          <p>
            A brief description of Project 2. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </li>
        <li>
          <h2>Project 3</h2>
          <p>
            A brief description of Project 3. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </li>
      </ul>
    </section>
  );
}