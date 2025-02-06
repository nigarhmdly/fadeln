import Header from '../../components/header/Header'
import styles from './Like.module.scss'
import Search from '../../components/search/Search'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteLikeItemThunk, getLikeItemThunk } from '../../redux/reducers/DataSlice'
import { useNavigate } from 'react-router';
import { FaHeart } from "react-icons/fa";


const Like = () => {

  const dispatch = useDispatch()
  const item = useSelector((state)=> state.item.item) || []
  const nav = useNavigate()
  useEffect((item)=>{
    dispatch(getLikeItemThunk(item))
  })

  const delet = (item)=>{
    dispatch(deleteLikeItemThunk(item))
  }

  const goo = (item)=>{
    nav('/detail',{state:{item}})
  }



  return (
    <section className={styles.like}>
      <Header/>
      <Search/>

<section>
  <div className={styles.container}>



<nav>
<p>Likes</p>
</nav>



<div>
<div className={styles.items}>
  {item && item.map(item=>{
    return <div>
      <img src={item.images} alt="" />
      <div onClick={()=> goo(item)} className={styles.buttons}>
      </div>
      <nav className={styles.buttonss}>
        <button onClick={()=> delet(item._id)}><FaHeart /></button>
        </nav>
    </div>
  })}
</div>
</div>











  </div>

  

</section>


    </section>
  )
}

export default Like