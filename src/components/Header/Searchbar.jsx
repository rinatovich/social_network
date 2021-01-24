import React from 'react';
import style from './Header.module.css';

const Searchbar = ()=>{
    return (
        <div className={style.searchbar}>
            <input type="text" className={style.search_input}/>
            <div className={style.search_icon}><i class="fas fa-search"></i></div>
        </div>
    )
}
export default Searchbar;