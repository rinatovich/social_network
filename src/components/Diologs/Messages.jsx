import React from 'react';
import BottomBar from './BottomBar';
import style from './Diologs.module.css';
import Message from './Message';
import TopBar from './TopBar';

const Messages  = ()=>{
    return (
        <div className={style.messeges}>
            <TopBar name = 'Emma' lastSeen='28.01.2021'/>
            <div className={style.messagesDisplay}>
                <Message direction='recieved' messageText="Hi! What's up?"/>
                <Message direction='send' messageText="Im ok man. What about you?"/>
            </div>
            <BottomBar />
        </div>
    )
}

export default Messages;