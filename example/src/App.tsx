import React from 'react';
import { ReactShare } from 'react-shareit';

function App() {
  const shareData = {
    title: 'Modernizing react-shareit!',
    text: 'Check out this awesome React share library.',
    url: 'https://github.com/zahidkhan846/react-shareit',
  };

  return (
    <div className="container">
      <h1>🏃 react-shareit Demo</h1>
      <p>Modern features, sleek design, and easy to use.</p>
      
      <div className="card">
        <ReactShare 
          data={shareData} 
          showLabels={true} 
          copySuccessText="Link Copied!"
        >
          <button className="share-btn">Share with Labels (Grid)</button>
        </ReactShare>
      </div>

      <div className="card">
        <ReactShare 
          data={shareData} 
          scrollable={true} 
          showLabels={true}
          disableNative={true}
        >
          <button className="share-btn">Scrollable (Fallack Force)</button>
        </ReactShare>
      </div>

      <div className="features">
        <h2>Features to Test:</h2>
        <ul>
          <li><strong>Glassmorphism:</strong> Blurred backdrop and modal.</li>
          <li><strong>Bottom Sheet:</strong> Slides up on mobile.</li>
          <li><strong>Platform Labels:</strong> "Facebook", "WhatsApp", etc.</li>
          <li><strong>Copy Link Feedback:</strong> Shows "Link Copied!" toast.</li>
          <li><strong>New Sites:</strong> Discord and Pinterest support.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
