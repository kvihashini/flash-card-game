import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AnswerInput = ({ answer, onChange, onSubmit }) => {
  // handles enter key press for submitting answer
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };

  // handle user input submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      gap={3}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {/* textfield for user's input */}
      <TextField
        label="Your Answer"
        type="number"
        name="answer"
        value={answer}
        onChange={onChange}
        required
        variant="filled"
        margin="normal"
        onKeyDown={handleKeyPress}
        sx={{ width: "100%", maxWidth: "300px" }}
      />

      {/* button handles submitting of user's answer */}
      <Button type="submit" variant="contained" color="secondary" size="large">
        Submit
      </Button>
    </Box>
  );
};

export default AnswerInput;
