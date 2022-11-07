import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from '../App';
import '../Templates/css/style.css'
import Homepage from '../Templates/Homepage';

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/homepage'  element={<Homepage/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router