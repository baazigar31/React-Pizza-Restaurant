import  {React,useEffect, useState} from 'react';
import axios from 'axios';
import MenuItems from './menuItems';
import './style.css';

const data=[];

function MenuItm(){

    const [images,setImages]=useState([])

    useEffect(function(){
        axios.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
        .then(response=>{
            // console.log(response);
            setImages(response.data);
        })
        .then(error=>{
            console.log(error);
        })
    })

    
    for (const obj of images) {
        data.push((obj));
    }



    return (
    <main>
        {

                        images.map((list)=>{
                            return (
                                <div key={list.id} className="col-4">
                                        {/* <img src={value.img_url} className="card-img-top" alt="image"></img> */}
                                        <MenuItems item={list}></MenuItems>
                                </div>
                            )
                        })

                        
             

                

        }
    </main>)
}



export default MenuItm;