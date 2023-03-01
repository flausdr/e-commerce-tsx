import { useState } from "react";

import SignIn from "./form-sign-in";
import SignUp from "./form-sign-up";

import './style.scss';

const NotLogined = () => {
    const [loginOrReg, setLoginOrReg] = useState(true);

    const activeStyles = "tracking-widest font-bold text-3xl uppercase cursor-pointer is-logined",
        disableStyles = "tracking-widest font-bold text-3xl uppercase cursor-pointer text-gray-500 is-logined";

    return (
        <div className="flex flex-col items-center h-fit">
            <div className="flex w-2/5 justify-around pt-20 mb-16">
                <h3 
                    className={loginOrReg ? activeStyles : disableStyles}
                    onClick={() => {setLoginOrReg(true)}}
                >
                    Sign in
                </h3>
                <h3 
                    className={!loginOrReg ? activeStyles : disableStyles}
                    onClick={() => {setLoginOrReg(false)}}
                >
                    Sign up
                </h3>
            </div>
            {
                loginOrReg ? <SignIn /> : <SignUp />
            }
        </div>
    )
}

export default NotLogined;