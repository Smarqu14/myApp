import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => (
   <div className="condiv">
      <h1>PortfolioPage</h1>
      <p>Take a look around</p>
      <Link to='/projects/1'>ItemOne</Link>
      <Link to='/projects/2'>ItemTwo</Link>
   </div>
)

export default Projects;