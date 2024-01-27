import React, { useState } from "react";
import "./App.css"; // Import the stylesheet
import questions from "./questions"; // Import the questions data
import QuestionBox from "./components/QuestionBox"; // Import the QuestionBox component

function App() {
  // State to track the mode (light or dark)
  const [isLightMode, setIsLightMode] = useState(false);

  // Function to handle button click and toggle mode
  const toggleMode = () => {
    // Toggle the mode state
    setIsLightMode(!isLightMode);

    // Change the body background color based on the mode
    document.body.style.backgroundColor = isLightMode ? "#fefae0" : "#344e41";
    document.querySelector(".questioncontainer").style.backgroundColor = isLightMode ? "#e9edc9" : "#a3b18a";
    document.querySelector(".modetoggle").style.backgroundColor = isLightMode ? "#979e7f" : "#588157";
  };

  return (
    <div className={`main ${isLightMode ? "light" : "dark"}`}>
      {/* question container with dynamic class based on mode */}
      <div id="kalvium">
        <img id="kalvium-image" src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" alt="" />
      </div>
      <div className="header">
        {/* Header section */}
        {/* Button to toggle mode */}
        <button onClick={toggleMode} className="toggle">
          {/* Display text based on mode */}
          {isLightMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      {/* Render the QuestionBox component with questions data */}
      <QuestionBox data={questions} />
    </div>
  );
}

export default App;
