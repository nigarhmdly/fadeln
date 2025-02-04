import React from 'react'
import { useLocation } from 'react-router'
import styles from './Details.module.scss'
import Header from '../../components/header/Header'
import { MdOutlinePlayCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Details = () => {
    const loc = useLocation()
    const {item} = loc.state
  
  return (
   <section className={styles.Details}>
    <Header/>
<section className={styles.det}> 
    
     <div className={styles.container}>
     

    <div>
{item? <div>

   <nav>
   <img src={item.images} alt="" />
   <li>
  <button><FaRegHeart /></button>
          <button><FaRegEye /></button>
          <button><FaRegBookmark /></button>
</li>
   <h1>RATINGS</h1>

   <p>⭐ {item.imdb} / 10</p>
<br />
   <a href={item.trailer}><i><MdOutlinePlayCircle /></i>TRAILER</a>


   </nav>

   <div className={styles.text}>
   <h3>
   <h1>{item.name} <p>{item.years} Directed by {item.author}</p></h1>
   <p>{item.description}</p>


   <table>
   <tr>
    <td>Release date</td>
    <td>{item.years} ( {item.country} )</td>
  </tr>


   <tr>
    <td>Genres</td>
    <td>{item.genres}</td>
  </tr>

  <tr>
    <td>Countres</td>
    <td>{item.country}</td>

  </tr>
  <tr>
    <td>Language</td>
    <td>{item.language}</td>
  </tr>
</table>


   </h3>
   </div>

  </div> : <p>melumat yoxdur</p> }
    </div>
  </div>
   </section>
   </section>
)
}

export default Details