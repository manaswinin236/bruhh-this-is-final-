import { useState } from "react";
import "./style.css";
import Result from "./Result";

// Functional component for rendering questions and handling user responses
function QuestionBox(props) {
  // State variables to track question number, highlight state, and score
  const [highlight, setHighlight] = useState(false);
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);

  // Function to toggle highlighting on question text
  const questionHighlight = () => {
    setHighlight(true); // Set highlight to true when "Highlight" button is clicked
  };

  // Function to remove highlighting on question text
  const removeHighlight = () => {
    setHighlight(false); // Set highlight to false when "Remove Highlight" button is clicked
  };

  // Handler to reset the state variables
  const resetState = () => {
    setNumber(0);
    setHighlight(false);
    setScore(0);
  };

  // Handler for option click
  const handleOptionClick = (e) => {
    setNumber(number + 1);
    setHighlight(false); // Reset highlight state when an option is clicked

    // Check if the clicked option is correct and update the score
    if (e.target.getAttribute("istrue") === "true") {
      setScore(score + 1);
    }
  };

  // ... (existing code)

  //showing the result page after 5 questions are complete
  let content;
  if (number < 5) {
    // Determine the class for highlighting question text
    const questionClass = highlight ? "highlighted" : "";

    content = (
      <div className="questioncontainer">
        <div className="questionNum">
          <span className="questionNum-text">Question: {number + 1} of 5</span>
        </div>
        <div className="question">
          <h2 className={questionClass}>{props.data[number].text}</h2>
        </div>
        <div className="optioncontainer">
          {/* Mapping through options and rendering them */}
          {props.data[number].options.map((option, index) => (
            <p
              key={index}
              className="options"
              onClick={handleOptionClick}
              istrue={`${option.isCorrect}`}
            >
              {option.text}
            </p>
          ))}
        </div>
        {/* Buttons for toggling highlight */}
        <div className="highlightButtons">
          <div className="highlight" onClick={questionHighlight}>
            Highlight
          </div>
          <div className="remove-highlight" onClick={removeHighlight}>
            Remove Highlight
          </div>
        </div>
      </div>
    );
  } else {
    // Display result component when all questions are answered
    content = <Result score={score} reset={resetState} />;
  }

  return <div>{content}</div>;
}

// Exporting the QuestionBox component
export default QuestionBox;
