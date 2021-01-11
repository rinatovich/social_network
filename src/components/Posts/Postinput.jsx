import React from 'react';

const Postinput = ()=>{
    return (
        <div className="postinput">
            <div className="title">My posts</div>
            <input type="text" className="post_input"/>
            <div className="btn_section"><button>Send</button></div>
        </div>
    )
}
export default Postinput;