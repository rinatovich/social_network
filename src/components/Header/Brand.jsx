import React from 'react';
import style from './Header.module.css';
 
const Brand = ()=>{
    return (
        <div className={style.brand}>
            <div className={style.image_container}>
                <img src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_linux-256.png" alt="facebook"/>
            </div>
        </div>
    )
}
export default Brand;