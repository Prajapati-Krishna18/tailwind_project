import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import StudentDashboard from "./pages/studentDashboard";
import Attendence from "./pages/Attendence";
import Calender from "./pages/Calender";
import Chat from "./pages/Chat";
import LeavePage from "./pages/LeavePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/student/attendence" element={<Attendence />} />
      <Route path="/student/calender" element={<Calender />} />
      <Route path="/student/chat" element={<Chat />} />
      <Route path="/student/leave" element={<LeavePage />} />
    </Routes>
  );
}

export default App;
