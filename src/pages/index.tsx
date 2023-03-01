import Main from "./main-page";
import Account from "./my-account";
import Cart from "./cart";
import Wishlist from './wishlist';

import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/my-account' element={<Account />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
    )
}

export default App;