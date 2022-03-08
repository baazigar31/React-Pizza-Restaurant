import React from 'react';
import CartCountButton from '../../components/Common/CartCountButton';
import Footer from '../../components/Common/Footer';
import Menu from '../../components/Common/Menu';
import Banner from '../../components/Home/Banner';
const Home=()=>{
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* Menu */}
            <Menu ></Menu>
            {/* Footer */}
            <Footer></Footer>
            {/* Cart Count Button */}
            <CartCountButton></CartCountButton>
        </div>
    )
}

export default Home;