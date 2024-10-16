import React from 'react';

export default function InfoSection() {
  return (
    <div className="infosection flex justify-content">
    <div className="info-text">
        <h1>Welcome to the Toronto Intelligent Systems Lab</h1>
        <p>
        Our lab is a place for computer scientists and creative thinkers to come together and design the next generation of algorithms for robotic intelligence. The lab is located at the&nbsp;
        <a href="http://www.toronto.edu/" target="_blank" rel="noopener noreferrer">
            University of Toronto
        </a> 
        &nbsp;and led by&nbsp;
        <a href="../author/igor-gilitschenski/">Igor Gilitschenski</a>.
        </p>
    </div>
    <div className="info-image">
        <img src="/welcomehome.jpg" alt="Lab Overview" />
    </div>
    </div>

  );
}
