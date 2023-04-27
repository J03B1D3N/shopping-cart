import {Link, Outlet} from "react-router-dom";




export default function ShopNav() {

    return <>
        <div className="shopNav">

        <Link to={"/shop/nav/allItems"}>ALL ITEMS</Link>

        <Link to={"/shop/nav/bearings"}>BEARINGS</Link>

        <Link to={"/shop/nav/trucks"}>TRUCKS</Link>

        <Link to={"/shop/nav/wheels"}>WHEELS</Link>    

        <Link to={"/shop/nav/decks"}>DECKS</Link> 

        </div>

        <div className="shop">

            <Outlet/>

        </div>
    </>
    
    
}
