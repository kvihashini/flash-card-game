import React, { useState, useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import Game from "../Game/Game";
import ToggleOperations from "./ToggleOperations";

/**
 *
 * @returns home page
 * instructions on how to play
 * toggle button to choose operation
 * shows current highest score
 * play button
 *
 */
function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [operation, setOperation] = useState("multiply");

  const storedHighestScore = localStorage.getItem("highestScore") || 0;
  const highestScoreMessage = `Highest Score: ${storedHighestScore}`;

  const [timer, setTimer] = useState(15);

  const startGame = () => {
    setGameStarted(true);
    setTimer(15);
  };

  // update timer every second
  useEffect(() => {
    let timerInterval;

    if (gameStarted) {
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    // stop the timer when it reaches 0
    if (timer === 0) {
      clearInterval(timerInterval);
      setGameStarted(false);
    }

    // cleanup interval on component unmount
    return () => clearInterval(timerInterval);
  }, [timer, gameStarted]);

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        {gameStarted && <Game timer={timer} operation={operation} />}

        {!gameStarted && (
          <Grid
            container
            item
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Typography variant="h6" style={{ textAlign: "left" }}>
                <ol>
                  <b>how to play</b>
                  <li>select the math operation you would like to practice</li>
                  <li>click on the 'play now' button</li>
                  <li>
                    you will be given 1 minute to solve as many questions as you
                    can
                  </li>
                  <li>
                    your score will increase by 1 if you are correct, and
                    decrease by 1 if you are wrong
                  </li>
                  <li>your highest score will be saved!</li>
                </ol>
              </Typography>
            </Grid>

            <Grid
              container
              direction="row"
              spacing={5}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                {/** include toggle button to choose operation */}
                <ToggleOperations
                  disabled={false}
                  onChange={(value) => setOperation(value)}
                />
              </Grid>
              <Grid item>
                {/** play button to start game */}
                <Button
                  onClick={startGame}
                  size="large"
                  color="secondary"
                  variant="contained"
                >
                  start playing
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h6">{highestScoreMessage}</Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Home;
