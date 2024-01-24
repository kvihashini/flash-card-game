import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ScoreTracker = ({ score }) => {
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    // retrieve the highest score from localStorage on component mount
    const storedHighestScore = localStorage.getItem("highestScore") || 0;
    if (storedHighestScore) {
      setHighestScore(parseInt(storedHighestScore, 10));
    }
  }, []);

  useEffect(() => {
    // update highest score in localStorage when the current score surpasses it
    if (score > highestScore) {
      setHighestScore(score);
      localStorage.setItem("highestScore", score.toString());
    }
  }, [score, highestScore]);

  // message to display current score
  const scoreMessage = `Score: ${score}`;
  const highestScoreMessage = `Highest Score: ${highestScore}`;

  return (
    <Box
      className="score-tracker"
      sx={{
        textAlign: "center",
      }}
    >
      {/* displays user's score */}
      <Typography variant="h4">{scoreMessage}</Typography>
      <Typography variant="h6">{highestScoreMessage}</Typography>
    </Box>
  );
};

export default ScoreTracker;
