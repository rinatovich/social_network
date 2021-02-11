import React from 'react';
import Post from './Post';
import style from './Posts.module.css';
const Postsarea = ()=>{
    let post = [
        {id:1, text: 'Hello world', likesCount: '30'},
        {id :2, text: 'Its my first post', likesCount: '20'},
        {id : 3, text: 'Yahhooooooo', likesCount: '8'},
        {id : 4, text: 'uauauuuauaauau', likesCount: '10'}
    ]
    let posts = post.map((p)=><Post text = {p.text} likesCount = {p.likesCount}/>)
    return (
        <div className={style.postsarea}>
            {posts}
        </div>
    )
}
export default Postsarea;