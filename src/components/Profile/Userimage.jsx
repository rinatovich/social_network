import React from 'react';
import style from './Profile.module.css';

const Userimage = ()=>{
    return (
        <div className={style.image}>
            <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="user_image" />
        </div>
    )
}
export default Userimage;