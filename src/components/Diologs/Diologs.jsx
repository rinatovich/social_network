import React from 'react';
import CompanionsList from './CompanionsList';
import Messages from './Messages';
import style from './Diologs.module.css';

const Diologs = ()=>{
	return(
		<div className={style.diologs}>
			<CompanionsList />
			<Messages />
		</div>
		)
}

export default Diologs;