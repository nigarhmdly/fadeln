import React from 'react'
import { CiSearch } from "react-icons/ci";
import styles from './Search.module.scss'

const Search = () => {
  return (
    <section className={styles.Search}>
        <nav>
        <input
        id=""
        name=""
        placeholder='Search'
        type="text"
      />
      <i><CiSearch/></i>
        </nav>
    </section>
  )
}

export default Search