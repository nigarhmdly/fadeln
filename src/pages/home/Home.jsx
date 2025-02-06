import React from 'react'
import Header from '../../components/header/Header'
import NewFilms from '../../components/newFilms/NewFilms'
import Films from '../../components/Films/Films'
import Search from '../../components/search/Search'

const Home = () => {
  return (
    <div>
      <Header/>
      <Search/>
      <NewFilms/>
      <Films/>
    </div>
  )
}

export default Home