import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.js";
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <>
      <Header />
      {/* <LandingPage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
