import Main from "./main-page";
import Login from "./login";

import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default App;