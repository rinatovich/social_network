import React from 'react';
import Userinfo from './Userinfo';
import Userimage from './Userimage';
import Posts from '../Posts/Posts';

const Profile = ()=>{
    return (
        <div className="profile">
            <div className="wallpaper"><img src="https://www.itl.cat/pngfile/big/50-505834_download-nfs-hot-pursuit.jpg" alt="nature"/></div>
            <div className="user_info">
                <Userimage />
                <Userinfo />
            </div>
            <Posts />
        </div>
        
    )
}
export default Profile;