import React from 'react';
import style from './Diologs.module.css';

const TopBar = (props)=>{
    return (
        <div className={style.topBar}>
            <div className="userInfo">
                <div className="name">{props.name}</div>
                <div className="last_seen">{props.lastSeen}</div>
            </div>
        </div>
    )
}
export default TopBar;