import React from 'react'
import { useNavigate } from 'react-router'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {

    const nav = useNavigate()

  return (
     <div className={styles.not}>
        <h1>404</h1>
        <p>Sehife tapilmadi</p>
        <button onClick={()=> nav(-1)}>Geri</button>
    </div>
  )
}

export default NotFoundPage