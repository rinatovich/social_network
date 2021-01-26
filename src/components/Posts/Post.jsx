import React from 'react';
import style from './Posts.module.css';
const Post = (props)=>{
    return(
        <div className={style.post}>
            <div className={style.avatar}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnpNcjCtkByOd98wZFcme0ff7TQXi68VCLQ&usqp=CAU" alt="user_avatar"/></div>
            <div className={style.text}>{props.text}</div>
            <div className={style.likes}><i class="fas fa-thumbs-up"></i><span className={style.likeCounter}>{props.likesCount}</span></div>
        </div>
    )
}
export default Post;