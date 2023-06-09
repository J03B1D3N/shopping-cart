import {Link, Outlet} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">

            <div className="title">
                BOARDS OF BIDEN
            </div>

            <div className="menus">
            
                    <Link to={"/"}>HOME</Link>
    
                    <Link to={"/shop/nav/allItems"}>SHOP</Link>
               
                    <Link to={"/contacts"}>CONTACTS</Link>

                    <Link to={"/cart"}>CART</Link>                
                
            </div>

        </div>
    )
}