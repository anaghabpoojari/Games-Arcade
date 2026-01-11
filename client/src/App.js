import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TicTacToe from "./pages/TicTacToe";
import MemoryCard from "./pages/MemoryCard";
import Hangman from "./pages/Hangman";
import WhackAMole from "./pages/WhackAMole";
import Snake from "./pages/Snake";
import SimonSays from "./pages/SimonSays";

// Private Route Wrapper
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Games */}
        <Route
          path="/dashboard/tictactoe"
          element={
            <PrivateRoute>
              <TicTacToe />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/memorycard"
          element={
            <PrivateRoute>
              <MemoryCard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/hangman"
          element={
            <PrivateRoute>
              <Hangman />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/whackamole"
          element={
            <PrivateRoute>
              <WhackAMole />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/snake"
          element={
            <PrivateRoute>
              <Snake />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/simonsays"
          element={
            <PrivateRoute>
              <SimonSays />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;