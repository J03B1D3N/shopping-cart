import { Route, Routes } from "react-router-dom"
import Home from "./menu/home.js"
import Contacts from "./menu/contacts.js"
import Cart from "./menu/cart.js"

import Shop from "./menu/shop/shop.js"
import ShopNav from "./menu/shop/shopNav.js"
import AllItems from "./menu/shop/AllItems.js"
import Bearings from "./menu/shop/bearings.js"
import Trucks from "./menu/shop/trucks.js"
import Wheels from "./menu/shop/wheels.js"
import Decks from "./menu/shop/decks.js"


export default function Main() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}>
                    <Route path="/shop/nav" element={<ShopNav/>}>
                        <Route path="/shop/nav/allItems" element={<AllItems/>}/>
                        <Route path="/shop/nav/bearings" element={<Bearings/>}/>
                        <Route path="/shop/nav/trucks" element={<Trucks/>}/>
                        <Route path="/shop/nav/wheels" element={<Wheels/>}/>
                        <Route path="/shop/nav/decks" element={<Decks/>}/>
                    </Route>    
                </Route>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/cart" element={<Cart/>}/>
                
            </Routes>
        </div>
    )
}