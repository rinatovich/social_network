import React from 'react';
import style from './Diologs.module.css';

const BottomBar = ()=>{
    return (
        <div className={style.bottomBar}>
            <textarea name="message" id={style.messageInput}></textarea>
            <div className={style.btn}><i class="fas fa-arrow-right"></i></div>
        </div>
    )
}
export default BottomBar;