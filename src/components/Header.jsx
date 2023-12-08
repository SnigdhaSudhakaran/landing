import React from "react";



function Header() {
    return (
  
        <div className="header">
            
            <nav className="navigation">
                <ul>
                    <li><a href="/">Accessories</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Apparel</a></li>
                    <li><a href="/">Rides</a></li>
                </ul>
            </nav>
            <div className="btn">
                <button type="button">Discover More</button>
            </div>
            <div className="bt">
            <button type="button">BOOK A RIDE</button></div>
            <div className="bt1">
            <button type="button">BOOK A BIKE</button>
            </div>
        </div>
    );
}
export default Header;
      