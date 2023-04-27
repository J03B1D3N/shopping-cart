import { Route, Routes } from "react-router-dom"
import Home from "./menu/home.js"
import Contacts from "./menu/contacts.js"
import Cart from "./menu/cart.js"

import Items from "./menu/shop/shopItems/items.js"
import Shop from "./menu/shop/shop.js"
import ShopNav from "./menu/shop/shopNav.js"
import AllItems from "./menu/shop/shopItems/AllItems.js"
import Bearings from "./menu/shop/shopItems/bearings.js"
import Trucks from "./menu/shop/shopItems/trucks.js"
import Decks from "./menu/shop/shopItems/decks.js"
import ItemDetail from "./menu/shop/shopItems/itemDetail.js"
import Wheels from "./menu/shop/shopItems/wheels.js"


export default function Main() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}>
                    <Route path="/shop/nav" element={<ShopNav/>}>
                        <Route path="/shop/nav/items" element={<Items/>}>
                        <Route path="/shop/nav/items/allItems" element={<AllItems/>}/>
                        <Route path="/shop/nav/items/allItems" element={<AllItems/>}/>
                        <Route path="/shop/nav/items/bearings" element={<Bearings/>}/>
                        <Route path="/shop/nav/items/trucks" element={<Trucks/>}/>
                        <Route path="/shop/nav/items/wheels" element={<Wheels/>}/>
                        <Route path="/shop/nav/items/decks" element={<Decks/>}/>
                        </Route>
                        <Route path="/shop/nav/:name" element={<ItemDetail/>}/>
                    </Route>    
                </Route>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/cart" element={<Cart/>}/>
                
            </Routes>
        </div>
    )
}