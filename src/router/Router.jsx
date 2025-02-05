import React from 'react'
import Home from '../pages/home/Home'
import AdminPanel from '../pages/adminPanel/AdminPanel'
import Details from '../pages/detailsPage/Details'
import NotFoundPage from '../pages/notFoundPage/NotFoundPage'
import { BrowserRouter, Route, Routes } from 'react-router'
import Watch from '../pages/watch/Watch'
import Like from '../pages/like/Like'
import Bookmark from '../pages/bookmark/Bookmark'
import Login from '../pages/login/Login'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mark' element={<Bookmark/>}/>
        <Route path='/like' element={<Like/>}/>
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/admin' element={<AdminPanel/>}/>
        <Route path='/detail' element={<Details/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router