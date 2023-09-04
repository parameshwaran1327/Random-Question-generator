// This is the Question page 

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [feedback, setFeedback] = useState('');
  const history = useHistory(); 

  useEffect(() => {
    // Fetch questions from the Django API when the component mounts
    fetch('/api/questions/')
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.questions);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); // The empty array means this effect runs only once, when the component mounts

  const currentQuestion = questions[currentQuestionIndex];
  const [score, setScore] = useState(0);

const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
    if (selectedChoice === currentQuestion.correctChoice) {
      setFeedback('Correct!');
      // Handle correct answer logic here
    }
    else{
      setFeedback('InCorrect!');
    }
  };

  const handleNextQuestion = () => {
    if (!selectedChoice) {
      setFeedback('Please select an answer.');
      return;
    }
//    Check the selected choice and the corret choice here
    if (selectedChoice === currentQuestion.correctChoice) {
      // this code help to increse score when user choice is correct
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedChoice(null);
    } else {
      const finalScore = selectedChoice === currentQuestion.correctChoice ? score + 1 : score;
      history.push('/result', { score: finalScore }); 
    }
  };
// The HTML code use here to display the questions and choices
  return (
    <div className="question-container">
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p className='question'>{currentQuestion?.question}</p>
      <div className="choices">
        {currentQuestion?.choices.map((choice, index) => (
          <label key={index}>
            <input
              type="radio"
              name="choice"
              value={choice}
              checked={selectedChoice === choice}
              onChange={() => handleChoiceSelect(choice)}
            />
            {choice}
          </label>
        ))}
      </div>
      <button className='next_butten' onClick={handleNextQuestion}>Next</button>
      <p className='qs_feedback_bu'>{feedback}</p>
    </div>
  );
};

export default Question;
