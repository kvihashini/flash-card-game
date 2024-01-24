import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const QuestionDisplay = ({ num1, num2, operation, isWrong }) => {
  const operations = { multiply: "x", add: "+", subtract: "-" };

  return (
    <Grid container direction="row" alignItems="center" spacing={10}>
      <Grid item>
        {/* Card for the first number */}
        <Card
          className={isWrong ? "blink" : ""}
          style={{
            width: "200px",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography variant="h1" component="div">
              {num1}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        {/* Display the operation symbol */}
        <Typography variant="h2">{operations[operation]}</Typography>
      </Grid>

      <Grid item>
        {/* Card for the second number */}
        <Card
          className={isWrong ? "blink" : ""}
          style={{
            width: "200px",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography variant="h1" component="div">
              {num2}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default QuestionDisplay;
