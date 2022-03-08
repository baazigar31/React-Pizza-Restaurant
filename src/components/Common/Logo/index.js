import React from 'react';
import './styles.css';
import logoImg from './Logo.jpg';
const Logo=()=>{
    return (
        <div className="logo">
            <div>
                <img src={logoImg} alt="logo "></img>
                <span>
                    <b>Pizza</b>
                </span>
            </div>
            <p><b>Known for the taste!</b></p>
        </div>
    )
}
export default Logo;