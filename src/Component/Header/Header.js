import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="header-img">
                    <img src={logo} alt="" />
                </div>
                <nav className='nav-content'>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order Review</a>
                    <a href="/inventory">Manage Inventory Here</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;