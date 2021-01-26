import React from 'react';
import Post from './Post';
import style from './Posts.module.css';
const Postsarea = ()=>{
    return (
        <div className={style.postsarea}>
            <Post text = 'Hello world' likesCount = '30'/>
            <Post text = 'Its my first post' likesCount = '40'/>
        </div>
    )
}
export default Postsarea;