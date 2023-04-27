import { Route, Routes } from "react-router-dom"
import Home from "./menu/home.js"
import Contacts from "./menu/contacts.js"
import Shop from "./menu/shop.js"
import Cart from "./menu/cart.js"

export default function Main() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/cart" element={<Cart/>}/>
                
            </Routes>
        </div>
    )
}