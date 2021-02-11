import React from 'react';
import style from './Diologs.module.css';
import {NavLink} from 'react-router-dom';

const Companion = (props)=>{
    return (
        <NavLink activeClassName={style.activeCompanion} to={'/diologs/'+props.id} className={style.companion}>
            <div className={style.image}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4SeTaeODhJ16bUaV341S_MVdPKgIQxRgjIg&usqp=CAU" alt=""/>
            </div>
            <div className={style.info}>
                <div className={style.name}>{props.name}</div>
            </div>
        </NavLink>
    )
}
export default Companion;