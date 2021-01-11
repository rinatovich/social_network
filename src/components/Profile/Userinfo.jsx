import React from 'react';

const Userinfo = ()=>{
    return (
        <div className="user_info__content">
            <div className="user_name">James A.</div>
            <div className="row">
                <div className="property">Date of birth:</div>
                <div className="user_dateOfBirth">2 january</div>
            </div>
            <div className="row">
                <div className="property">City:</div>
                <div className="user_city">Moscow</div>
            </div>
            <div className="row">
                <div className="property">Educatio:</div>
                <div className="user_eduaction">BSU'11</div>
            </div>
            <div className="row">
                <div className="property">Web Site:</div>
                <div className="user_website">https://hello-world.com</div>
            </div>
        </div>
    )
}
export default Userinfo;