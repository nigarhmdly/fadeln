import React from 'react'
import { useLocation } from 'react-router'
import styles from './Details.module.scss'

const Details = () => {
    const loc = useLocation()
    const {item} = loc.state
  
  return (
    <div className={styles.det}>
    <h1>Details</h1>

    <div>
{item? <div>
    <img src={item.thumbnail} alt="" />
    <p>{item.title}</p>
    <span>{item.price}</span>
  </div> : <p>melumat yoxdur</p> }
    </div>
  </div>
)
}

export default Details