// This is the Result page.

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { score } = location.state || { score: 0 };
  const totalQuestions = 5; // Change this to the total number of questions
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = () => {
    // You can send the feedback to your backend or perform any desired action here
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
  };

  return (
    <div className="result-container">
      <h2>Quiz Result</h2>
      {/* This code shows the score after the test */}
      <p className="result-score">Your score: {score} out of {totalQuestions}</p>
      {!submitted ? (
        <div>
          {/* This can get a feedback from the user */}
          <h3>Feedback</h3>     
          <textarea
            rows="4"
            cols="50"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback here"
          />
          <button onClick={handleSubmitFeedback}>Submit Feedback</button>
        </div>
      ) : (
        <p className='feedback_submit'>Thank you for your feedback!</p>
      )}
    </div>
  );
};

export default Result;