import React from 'react';
import Post from './Post';
import style from './Posts.module.css';
const Postsarea = ()=>{
    return (
        <div className={style.postsarea}>
            <Post />
            <Post />
        </div>
    )
}
export default Postsarea;