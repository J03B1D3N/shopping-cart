import {Link, Outlet, Route, Routes } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">

            <div className="title">
                JOE BIDEN'S SKATEBOARDS
            </div>

            <div className="menus">
            
               
                    <Link to={"/"}>HOME</Link>
               

               
                    <Link to={"/shop"}>SHOP</Link>
               

                
                    <Link to={"/contacts"}>CONTACTS</Link>
                
                <Outlet/>
                <div className="cart">
                    CART
                </div>
            </div>

        </div>
    )
}