import React from 'react';

const Searchbar = ()=>{
    return (
        <div className="searchbar">
            <input type="text" className="search_input"/>
            <div className="search_icon"><i class="fas fa-search"></i></div>
        </div>
    )
}
export default Searchbar;