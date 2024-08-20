import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./components/AuthForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthForm type="login" />} />
        <Route path="/signup" element={<AuthForm type="signup" />} />
        <Route path="/home" element={<Home />} />{" "}
        {/* Define your Home component */}
        {/* Add other routes as necessary */}
      </Routes>
    </Router>
  );
}

const Home = () => {
  return <h1>Welcome to the Home Page!</h1>;
};

export default App;
