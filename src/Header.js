import React from 'react'
// import Logo from './images/robinhood.svg'
import Logo from "./robinhood.svg";
import './header.css';
const Header=()=>  {
    return (
        <div className="header__wrapper">
        {/*logo */}
        <div className="header__logo">
            <img src={Logo} width={25} alt='img' style={{color:"#fff"}}/>
        </div>
        {/*search */}
        <div className="header__search">
            <div className="header__searchContainer">
                <input placeholder="Search" type="text" />
            </div>
        </div>
        {/*menu items */}
        <div className="header__menuItems">
            <a href="#">Free Stocks</a>
            <a href="#">Portfolio</a>
            <a href="#">Cash</a>
            <a href="#">Messages</a>
            <a href="#">Account</a>
        </div>

            
        </div>
    )
}

export default Header
