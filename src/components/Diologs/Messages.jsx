import React from 'react';
import BottomBar from './BottomBar';
import style from './Diologs.module.css';
import Message from './Message';
import TopBar from './TopBar';

const Messages  = ()=>{
    let messagesData = [
        {id: 1, message: 'hi', direct: 'send'},
        {id: 2, message: 'how are you? ', direct: 'recieved'},
        {id: 3, message: 'Thank u. what about u?', direct: 'send'},
        {id: 4, message: 'im fine too', direct: 'recieved'},
        {id: 5, message: 'see u again', direct: 'send'},
        
    ]
    let messages = messagesData.map((m)=><Message direction={m.direct} messageText={m.message}/>);
    return (
        <div className={style.messeges}>
            <TopBar name = 'Emma' lastSeen='28.01.2021'/>
            <div className={style.messagesDisplay}>
                {messages}
            </div>
            <BottomBar />
        </div>
    )
}

export default Messages;