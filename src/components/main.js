import { Route, Routes } from "react-router-dom"
import Home from "./menu/home.js"
import Contacts from "./menu/contacts.js"
import Shop from "./menu/shop.js"

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    )
}