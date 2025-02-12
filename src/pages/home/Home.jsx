import React from 'react'
import Header from '../../components/header/Header'
import NewFilms from '../../components/newFilms/NewFilms'
import Films from '../../components/Films/Films'

const Home = () => {
  return (
    <div>
      <Header/>
      <NewFilms/>
      <Films/>
    </div>
  )
}

export default Home