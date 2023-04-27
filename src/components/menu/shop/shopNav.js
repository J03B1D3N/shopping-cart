import {Link, Outlet} from "react-router-dom";




export default function ShopNav() {

    return <>
        <div className="shopNav">

        <Link to={"/shop/nav/items/allItems"}>ALL ITEMS</Link>

        <Link to={"/shop/nav/items/bearings"}>BEARINGS</Link>

        <Link to={"/shop/nav/items/trucks"}>TRUCKS</Link>

        <Link to={"/shop/nav/items/wheels"}>WHEELS</Link>    

        <Link to={"/shop/nav/items/decks"}>DECKS</Link> 

        </div>

        <Outlet/>

    </>
    
    
}
