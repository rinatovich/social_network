import React from 'react';
import Companion from './Companion';
import style from './Diologs.module.css';

const CompanionsList = ()=>{
    return(
        <div className={style.companions_list}>
            <Companion to='/diologs/1'  name='Emma'/>
            <Companion to='/diologs/2'  name='Jo'/>
            <Companion to='/diologs/3'  name='Lolli'/>
            <Companion to='/diologs/4'  name='Lilly'/>

        </div>
    )
}
export default CompanionsList;