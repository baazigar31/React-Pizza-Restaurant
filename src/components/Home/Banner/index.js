import React from 'react';
import Logo from '../../Common/Logo';
import './styles.css';
import bannerImg from './banner.jpg';
const Banner=()=>{
    return (
        <header>
            <div className="header-content">
                <Logo></Logo>
                <div className="content-main">
                    <h1>Delicious pizza for your cravings</h1>
                    <p>Tasty pizza on the way!!</p>
                    <button>
                        View Menu<i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </div>
            <img src={bannerImg} alt="banner" className="header-img"></img>
        </header>
    )
}

export default Banner;