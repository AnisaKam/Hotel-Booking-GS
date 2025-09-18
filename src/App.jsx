//!!! Все компоненты при прописании нужно выбирать из списка и отщелкивать их, 
// для импортации, иначе все пропадает в браузере и показывает ошибки!

import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { Route, Router, Routes, useLocation } from 'react-router-dom';



function App() {
  
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    
      <div>
        {!isOwnerPath && <Navbar />}

        <div className='min-h-[70vh]'>
          <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
          </Router>
        </div>
        
      </div>
      
      
  )
}

export default App
