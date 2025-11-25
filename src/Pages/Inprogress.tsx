import React from 'react';


const InProgress: React.FC = () => {
  return (
    <div className="inprogress-container">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="content">
        <h1>Work in Progress <span>⏳</span> </h1>
        <p>I am crafting something amazing !! Please check back soon!</p>
        
        <div className="loading-indicator">Loading...
        <p className="spinner"></p>

        </div>
        <div className="additional-info">Stay tuned for updates!</div>
      </div>
    </div>
  );
};

export default InProgress;
