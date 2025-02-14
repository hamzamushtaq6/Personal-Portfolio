import React from 'react'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
