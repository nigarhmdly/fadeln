import React, { useState } from 'react'
import styles from './Header.module.scss'
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineManageSearch } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { LuMessageSquareHeart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { GiHamburgerMenu } from "react-icons/gi";




const Header = () => {



  const [title] = useState(<GiHamburgerMenu />);


  return (
    <section className={styles.header}>
      <header>
<div className={styles.container}>
  

<nav>
<img className={styles.logo} src="https://media-hosting.imagekit.io//a174d496b39d487d/logooo_modified_yellow.png?Expires=1833215808&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wvNodBUx4YKlTluBXjuA0Lhz8B6daESLY1ODcLPs5lsgugFE8mI65bsld5OtEUG2YknS-8yHe5UTV4V6ZNhrbFaUAYCrfCt6LZlxPvrQIiz~0SSfy6jSJTwsMA-sdwwTeL59555orlhYSWZHdczPPZznC3OivJ3Hps1gRguC5LI-TDViTLosCSV1sKCkVO1lW6Ovyhgl8D4RVmnp78oLlTTrClr5tAJqhRvufWH1u8WnhQDESMx8t5GlQ4uNXjhbfCvWm6npdwYQliYgVyC8mvR8ZQxno~RLrW7s1AYzkeFuWpHCLXJiaqhiTd3B~34okmk-vMSxtPnmW11gqqUx2w__" alt="" />

    <ul>
    <img src="https://media-hosting.imagekit.io//a174d496b39d487d/logooo_modified_yellow.png?Expires=1833215808&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wvNodBUx4YKlTluBXjuA0Lhz8B6daESLY1ODcLPs5lsgugFE8mI65bsld5OtEUG2YknS-8yHe5UTV4V6ZNhrbFaUAYCrfCt6LZlxPvrQIiz~0SSfy6jSJTwsMA-sdwwTeL59555orlhYSWZHdczPPZznC3OivJ3Hps1gRguC5LI-TDViTLosCSV1sKCkVO1lW6Ovyhgl8D4RVmnp78oLlTTrClr5tAJqhRvufWH1u8WnhQDESMx8t5GlQ4uNXjhbfCvWm6npdwYQliYgVyC8mvR8ZQxno~RLrW7s1AYzkeFuWpHCLXJiaqhiTd3B~34okmk-vMSxtPnmW11gqqUx2w__" alt="" />

        <li><a href="/"><i><TiHomeOutline /></i> Home</a></li>
        <li><a href="/j"><i><MdOutlineManageSearch /></i>Explore</a></li>
        <li><a href="/"><i><GoPeople /></i>Follower</a></li>
        <li><a href="/"><i><LuMessageSquareHeart /></i>Messages</a></li>
        <li><a href="/like"><i><FaRegHeart /></i>Likes</a></li>
        <li><a href="/watch"><i><FaRegEye /></i>Watch</a></li>
        <li><a href="/mark"><i><FaRegBookmark /></i>Bookmarks</a></li>
        <li><a href="/login"><i><CgProfile /></i>Profile</a></li>
        <li><a className={styles.post} href="/">Post</a></li>


<li className={styles.burger}>
<Dropdown as={ButtonGroup}>
      {/* Ox işarəsini gizlədən Toggle */}
      <Dropdown.Toggle variant="primary" className={styles.nocaret}>
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.menu}>



<Dropdown.Item eventKey="1">        <li><a href="/"><i><TiHomeOutline /></i> Home</a></li> </Dropdown.Item>
<Dropdown.Item eventKey="2">        <li><a href="/j"><i><MdOutlineManageSearch /></i>Explore</a></li>
</Dropdown.Item>
<Dropdown.Item eventKey="3">        <li><a href="/"><i><GoPeople /></i>Follower</a></li>
</Dropdown.Item>
<Dropdown.Item eventKey="4">        <li><a href="/"><i><LuMessageSquareHeart /></i>Messages</a></li>
</Dropdown.Item>
<Dropdown.Item eventKey="5">        <li><a href="/like"><i><FaRegHeart /></i>Likes</a></li>
</Dropdown.Item>
<Dropdown.Item eventKey="6">        <li><a href="/watch"><i><FaRegEye /></i>Watch</a></li>
</Dropdown.Item>
<Dropdown.Item eventKey="7">        <li><a href="/mark"><i><FaRegBookmark /></i>Bookmarks</a></li>
</Dropdown.Item>




<Dropdown.Divider />
<Dropdown.Item eventKey="4">        <li><a href="/login"><i><CgProfile /></i>Profile</a></li>
</Dropdown.Item>




      </Dropdown.Menu>
    </Dropdown>
  

</li>
    </ul>
</nav>
</div>
    </header>
    
    <a className={styles.addicon} href="/">+</a>
    </section>
  )
}

export default Header