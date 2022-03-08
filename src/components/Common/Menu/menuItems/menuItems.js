import React from 'react';
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import './MenuItemstyles.css';

const MenuItem=({item})=>{
    const { id,name,description,img_url,price,rating,isVeg,size,topping }= item;
    return (
        <div className="item">
            <img src={img_url} alt="item"></img>
            <div className="item-head-desc">
                 <p className="head-desc-name">{name}</p>
                 <p className="head-desc-info">
                     <small>{description}</small>
                 </p>
            </div>
            <div className="item-foot-desc">
                     <span className="foot-desc-price">${price}</span>
                     <ButtonAddRemoveItem quantity={200}></ButtonAddRemoveItem>
            </div>
        </div>
    )
}

export default MenuItem;