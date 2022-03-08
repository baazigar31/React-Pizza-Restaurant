import React from 'react';
import Logo from '../Common/Logo';
// import MenuItem from '../Common/Menu/menuItems/menuItems';

const Cart=()=>{
    return (
        <div>
            <div className="cart-header">
            <Logo></Logo>
            </div>
            <div className="orders">
                <h1 className="orders-heading">Your Orders</h1>
                <div className="order-menu">
                {/* <MenuItems></MenuItems> */}
                </div>
                <h3 className="orders-total">Your total$23</h3>
            </div>
        </div>
        
    )
}
export default Cart;