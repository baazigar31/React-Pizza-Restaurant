import React,{useState} from 'react';
import axios from 'axios';
import MenuItm from './menuItems/index';
// import './styles.css';

const Menu=({list})=>{
    const [images,setImage]=useState([])
    return (
        <div>
            <h1>Menu</h1>
            <MenuItm></MenuItm>
        </div>
        
    )
}
export default Menu;