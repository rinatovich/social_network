import React from 'react';
import Brand from './Brand';
import Searchbar from './Searchbar';

const Header = ()=>{
    return (
        <div className="header">
            <div className="container">
                <Brand />
                <Searchbar />
            </div>
        </div>
    )
}

export default Header;
