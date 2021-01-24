import React from 'react';
import Brand from './Brand';
import Searchbar from './Searchbar';
import style from './Header.module.css';

const Header = ()=>{
    return (
        <div className={style.header}>
            <div className={style.container}>
                <Brand />
                <Searchbar />
            </div>
        </div>
    )
}

export default Header;
