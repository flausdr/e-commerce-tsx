import Main from "./main-page";
import Account from "./my-account";
import Cart from "./cart";
import Wishlist from './wishlist';
import SignIn from './sign-in';
import SignUp from './sign-up';

import { Routes, Route } from "react-router-dom";
import useScrollToTop from "../store-module/hooks/scroll-to-top";

const App = () => {
    useScrollToTop()
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/my-account' element={<Account />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </>
    )
}

export default App;