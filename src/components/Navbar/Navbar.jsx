import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = ()=>{
    return (
        <div className={style.navbar}>
            <div className={style.item}><NavLink to="/profile" activeClassName={style.activeLink} >Profile</NavLink></div>
            <div className={style.item}><NavLink to="/diologs" activeClassName={style.activeLink}>Message</NavLink></div>
            <div className={style.item}><NavLink to="/news"  activeClassName={style.activeLink}>News</NavLink></div>
            <div className={style.item}><NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink></div>
            <div className={style.item}><NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink></div>
        </div>
    )
}
export default Navbar;