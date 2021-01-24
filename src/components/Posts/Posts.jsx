import React from 'react';
import Postinput from './Postinput';
import Postsarea from './Postsarea';
import style from './Posts.module.css';
const Posts = ()=>{
    return (
        <div className={style.posts}>
            <Postinput />
            <Postsarea />
        </div>
    )
}
export default Posts;