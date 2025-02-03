import React from 'react'
import Home from '../pages/home/Home'
import AdminPanel from '../pages/adminPanel/AdminPanel'
import Details from '../pages/detailsPage/Details'
import NotFoundPage from '../pages/notFoundPage/NotFoundPage'
import { BrowserRouter, Route, Routes } from 'react-router'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<AdminPanel/>}/>
        <Route path='/detail' element={<Details/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router