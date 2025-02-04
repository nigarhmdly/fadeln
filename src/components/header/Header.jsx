import React from 'react'
import styles from './Header.module.scss'
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineManageSearch } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { LuMessageSquareHeart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa";



const Header = () => {
  return (
    <header>
<div className={styles.container}>

<nav>
    <ul>
    <img src="https://media-hosting.imagekit.io//a174d496b39d487d/logooo_modified_yellow.png?Expires=1833215808&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wvNodBUx4YKlTluBXjuA0Lhz8B6daESLY1ODcLPs5lsgugFE8mI65bsld5OtEUG2YknS-8yHe5UTV4V6ZNhrbFaUAYCrfCt6LZlxPvrQIiz~0SSfy6jSJTwsMA-sdwwTeL59555orlhYSWZHdczPPZznC3OivJ3Hps1gRguC5LI-TDViTLosCSV1sKCkVO1lW6Ovyhgl8D4RVmnp78oLlTTrClr5tAJqhRvufWH1u8WnhQDESMx8t5GlQ4uNXjhbfCvWm6npdwYQliYgVyC8mvR8ZQxno~RLrW7s1AYzkeFuWpHCLXJiaqhiTd3B~34okmk-vMSxtPnmW11gqqUx2w__" alt="" />

        <li><a href="/"><i><TiHomeOutline /></i> Home</a></li>
        <li><a href="/j"><i><MdOutlineManageSearch /></i>Explore</a></li>
        <li><a href="/"><i><GoPeople /></i>Follower</a></li>
        <li><a href="/"><i><LuMessageSquareHeart /></i>Messages</a></li>
        <li><a href="/like"><i><FaRegHeart /></i>Likes</a></li>
        <li><a href="/watch"><i><FaRegEye /></i>Watch</a></li>
        <li><a href="/mark"><i><FaRegBookmark /></i>Bookmarks</a></li>
        <li><a href="/"><i><CgProfile /></i>Profile</a></li>
        <li><a className={styles.post} href="/">Post</a></li>
    </ul>
</nav>
</div>
    </header>
  )
}

export default Header