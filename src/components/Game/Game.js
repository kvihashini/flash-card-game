import React, { useState, useEffect } from "react";
import QuestionDisplay from "./QuestionDisplay";
import AnswerInput from "./AnswerInput";
import ScoreTracker from "./ScoreTracker";
import { Grid } from "@mui/material";
import "../../App.css";
import Typography from "@mui/material/Typography";

const Game = ({ timer, operation }) => {
  const [num1, setNum1] = useState(getRandomNumber(12));
  const [num2, setNum2] = useState(getRandomNumber(12));

  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isWrong, setIsWrong] = useState(false);

  // generate random number between 0 - max (inclusive)
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  // generate 2 new random numbers and set user input to blank
  function generateQuestion() {
    setNum1(getRandomNumber(12));
    setNum2(getRandomNumber(12));
    setUserAnswer("");
    setIsWrong(false);
  }

  // check user's answer based on the chosen operation
  function checkAnswer() {
    const operations = {
      multiply: (a, b) => a * b,
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
    };

    const correctAnswer = operations[operation](num1, num2);

    // parses user's input and updates score and question accordingly
    const userInputAnswer = parseInt(userAnswer, 10);
    if (userInputAnswer === correctAnswer) {
      setScore(score + 1);
      generateQuestion();
    } else {
      // prevent score from going below 0
      setScore(Math.max(score - 1, 0));
      setUserAnswer("");
      setIsWrong(true);
    }
  }

  useEffect(() => {
    const resetInterval = setInterval(() => {
      setIsWrong(false);
    }, 2000); // Reset duration in milliseconds (adjust as needed)

    return () => clearInterval(resetInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="game-container">
      {/* for user to choose their preferred math operation */}

      <Grid item>
        <Typography variant="h6">Time Left: {timer} seconds</Typography>
      </Grid>

      {/* displays question based on chosen operation */}
      <Grid item>
        <QuestionDisplay
          num1={num1}
          num2={num2}
          operation={operation}
          isWrong={isWrong}
        />
      </Grid>

      {/* input for user's answer and handling submission */}
      <Grid item>
        <AnswerInput
          answer={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onSubmit={checkAnswer}
        />
      </Grid>

      {/* displays score */}
      <Grid item>
        <ScoreTracker score={score} />
      </Grid>
    </div>
  );
};

export default Game;
