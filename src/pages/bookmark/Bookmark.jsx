import Header from '../../components/header/Header'
import styles from './Bookmark.module.scss'
import Search from '../../components/search/Search'
import { FaBookmark } from "react-icons/fa";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteLikeItemThunk, getLikeItemThunk } from '../../redux/reducers/DataSlice'
import { useNavigate } from 'react-router';



const Bookmark = () => {

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
<p>Bookmarks</p>
</nav>



<div>
<div className={styles.items}>
  {item && item.map(item=>{
    return <div>
      <h1>
      <img src={item.images} alt="" />
      <h3>
      <span>{item.name}</span>
      <p>{item.description}</p>
      </h3>
      </h1>
      <div onClick={()=> goo(item)} className={styles.buttons}>
      </div>
        <button onClick={()=> delet(item._id)}><FaBookmark /></button>

    </div>
  })}
</div>
</div>











  </div>

  

</section>


    </section>
  )
}

export default Bookmark