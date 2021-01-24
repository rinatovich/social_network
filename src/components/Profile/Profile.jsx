import React from 'react';
import Userinfo from './Userinfo';
import Userimage from './Userimage';
import Posts from '../Posts/Posts';
import style from './Profile.module.css';

const Profile = ()=>{
    return (
        <div className={style.profile}>
            <div className={style.wallpaper}><img src="https://www.itl.cat/pngfile/big/50-505834_download-nfs-hot-pursuit.jpg" alt="nature"/></div>
            <div className={style.user}>
                <Userimage />
                <Userinfo />
            </div>
            <Posts />
        </div>
        
    )
}
export default Profile;