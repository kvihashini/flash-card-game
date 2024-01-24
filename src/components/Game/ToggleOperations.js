import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

/**
 *
 *
 * @returns toggle button to select math operation
 */
function ToggleOperations({ disabled, onChange }) {
  const [operation, setOperation] = React.useState("multiply");

  const handleToggleChange = (event, value) => {
    setOperation(value);
    onChange(value);
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={operation}
      size="medium"
      exclusive
      disabled={disabled}
      onChange={handleToggleChange}
    >
      <ToggleButton value="multiply">Multiply</ToggleButton>
      <ToggleButton value="add">Add</ToggleButton>
      <ToggleButton value="subtract">Subtract</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleOperations;
