import React from "react";
import "./App.css";
import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Home from "./components/Game/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

/**
 *
 * @returns entire application
 * contains routing information for home
 */
function App() {
  return (
    <Router>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h5" component="div" style={{ color: "white" }}>
              math master
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
