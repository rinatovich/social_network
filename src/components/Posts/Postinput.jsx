import React from 'react';
import style from './Posts.module.css';

const Postinput = ()=>{
    return (
        <div className={style.postinput}>
            <div className={style.title}>My posts</div>
            <input type="text" className={style.input}/>
            <div className={style.btn_section}><button>Send</button></div>
        </div>
    )
}
export default Postinput;