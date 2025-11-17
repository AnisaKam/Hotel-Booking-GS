//!!! Все компоненты при прописании нужно выбирать из списка и отщелкивать их, 
// для импортации, иначе все пропадает в браузере и показывает ошибки!

import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';


function App() {
  
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    
      <div>
        {!isOwnerPath && <Navbar />}
        {false && <HotelReg />}
        <div className='min-h-[70vh]'>
         <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/rooms' element={<AllRooms />}/>
           <Route path='/rooms/:id' element={<RoomDetails />}/>
           <Route path='/my-bookings' element={<MyBookings />}/>
           <Route path='/owner' element={<Layout/>}>

           </Route>

           
         </Routes>
        </div>
        <Footer />
  </div>
      )
}

export default App

/*В эту часть кода Router теги не добавляем, т.к. он уже включен
в index.jsx - <BrowserRouter> добавлен вручную вместо StrictMode,
который  был на этом месте изначально, т.к. он может быть только 
в 1 документе.
 */
/*Для создания документа .env (react clerk) рядом с Hotel-booking выбираем значок Файл(Документ), а не Папку.*/

/*  {false && <HotelReg />}  - берем в {} и прописываем false && - чтобы скрыть созданную форму регистрации*/