import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import BoardMembers from './components/BoardMembers'

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/boardmembers' element={<BoardMembers />}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
