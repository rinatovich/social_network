import React from 'react';
import style from './Navbar.module.css';

const Navbar = ()=>{
    return (
        <div className={style.navbar}>
            <div className={style.item}><a href="#" className={style.text}>Profile</a></div>
            <div className={style.item}><a href="#" className={style.text}>Message</a></div>
            <div className={style.item}><a href="#" className={style.text}>News</a></div>
            <div className={style.item}><a href="#" className={style.text}>Music</a></div>
        </div>
    )
}
export default Navbar;