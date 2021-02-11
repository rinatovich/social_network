import React from 'react';
import Companion from './Companion';
import style from './Diologs.module.css';


const CompanionsList = ()=>{
    let dialogsData = [
        {id: 1, name: 'Emma'},
        {id: 2, name: 'Jo'},
        {id: 3, name: 'Lolli'},
        {id: 4, name: 'Lily'},
        {id: 5, name: 'Jeremy'},
        
    ]
    let diologs = dialogsData.map((d)=><Companion id={d.id}  name={d.name}/>)

    return(
        <div className={style.companions_list}>
            {diologs}
        </div>
    )
}
export default CompanionsList;