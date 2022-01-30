import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";

function Header() {
    const [{basket,user}] = useStateValue();
    console.log(basket);
    return <nav className='header'>
        {/* Amazon logo */}
        <Link to="/">
            <img className='header_logo'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt=''
            />
        </Link>
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
        </div>
        {/* 3 links */}
        <div className="header_nav">
            {/* 1st link */}
            <Link to='/login' className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello {user? user:"Stranger"} </span>
                    <span className="header_optionLineTwo">Sign {user? 'Out':'In'}</span>
                </div>
            </Link>
            {/* 2nd link */}
            <Link to='/login' className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Returns </span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
            </Link>
            {/* 3rd link  */}
            <Link to='/login' className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Your </span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
            </Link>
            {/* 4th link  */}
            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                    {/* Shopping Basket Icon */}
                    <ShoppingBasketIcon />
                    {/* Number of Items in the Basket  */}
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
        {/* search bar */}
    </nav>
}
export default Header;