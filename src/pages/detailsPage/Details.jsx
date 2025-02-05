import React from 'react'
import { useLocation } from 'react-router'
import styles from './Details.module.scss'
import Header from '../../components/header/Header'
import { MdOutlinePlayCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { useFormik } from 'formik';
import { FaRegEye } from "react-icons/fa";

const Details = () => {


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


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
  <table>
    <tr>
      <td> <p>Where to watch</p> <a href={item.trailer}><i><MdOutlinePlayCircle /></i>TRAILER</a></td>
    </tr>
    
    <tr>
      <th>Not streaming.</th>
    </tr>

    <tr >
      <th className={styles.link}><a href="$">All services…</a> <a href="https://www.justwatch.com/">JustWatch</a></th>
    </tr>
  </table>


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



<form onSubmit={formik.handleSubmit}>
       <input
         id="firstName"
         name="firstName"
         placeholder='Add Your Comment'
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       
       <button type="submit">Submit</button>
     </form>


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