const Header = () => {
    return ( 
        <header>
        <div className="navbar">
            <div className="nav-logo "></div>
                <div className="logo-border"></div>
                <div className="nav-address border">
                    <p className="add-first">Deliver to</p>
                    <div className="add-icon">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="add-second">India</p>
                    </div>
                </div>

                <div className="nav-search">
                    <select className="search-select">
                        <option>All</option>
                    </select>
                    <input placeholder="Search Amazon" className="search-input"/>
                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

                <div className="nav-signin border">
                    <p><span>Hello, sign in</span></p>
                    <p className="nav-second">Account & list</p>
                </div>

                <div className="nav-return border">
                    <p><span>Returns</span></p>
                    <p className="nav-second">& Order</p>
                </div>

                <div className="nav-cart border">
                    <i className="fa-solid fa-cart-shopping"></i>
                    Cart
                </div>

            
        </div>


        <div className="pannel">
            <div className="pannel-all">
                <i className="fa-solid fa-bars"></i>
                All
            </div>
            <div className="pannel-ops">
                <p>Today's Deals</p>
                <p>Registry</p>
                <p>Gift cards</p>
                <p>Sell</p>
            </div>
           
        </div>


    </header>
     );
}
 
export default Header;