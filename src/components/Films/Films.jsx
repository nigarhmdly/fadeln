import styles from './Films.module.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItemThunk } from '../../redux/reducers/DataSlice'
import { useNavigate } from 'react-router';
import { postLikeItemThunk } from '../../redux/reducers/DataSlice';
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Films = () => {


  const dispatch = useDispatch()
  const item = useSelector((state)=> state.item.item) || []
  const nav = useNavigate()
  useEffect((item)=>{
    dispatch(getItemThunk(item))
  })

  const add = (item)=>{
    dispatch(postLikeItemThunk(item))
  }

  const goo = (item)=>{
    nav('/detail',{state:{item}})
  }



  return (
    <section className={styles.Films}>
<div className={styles.container}>
<div className={styles.items}>
  {item && item.map(item=>{
    return <div>
      <img src={item.images} alt="" />
      <div onClick={()=> goo(item)} className={styles.buttons}>
      </div>
      <nav className={styles.buttonss}>
        <button onClick={()=> add(item)}><FaRegHeart /></button>
        <button><FaRegEye /></button>
        <button><FaRegBookmark /></button>
        </nav>
    </div>
  })}
</div>
</div>
    </section>
  )
}

export default Films