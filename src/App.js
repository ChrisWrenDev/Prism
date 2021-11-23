import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Browse from "./pages/Browse";
import WatchScreen from "./pages/WatchScreen";
import Profile from "./pages/Profile";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/watch" element={<WatchScreen />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
