import { Link } from "react-router-dom";
import { useState } from "react";

import Input from "../../../ui/input";
import { Button } from "../../../ui/button";
import { Validation } from "../../../plugins/validation";
import Social from "../social";

import { ReactComponent as EyeShow } from '../../assets/eye-show.svg';
import { ReactComponent as EyeShowSlash } from '../../assets/eye-show-slash.svg';

import '../../style.scss';

const FormSignIn = () => {
    const val = new Validation(),
        [show, setShow] = useState(true),
        type = show ? "password" : "text";

    const inputClass = "px-2 py-2 bg-transparent border rounded outline-none input-text w-3/5 mb-5 tracking-wider",
        buttonClass = "border-2 text-xl tracking-widest uppercase py-3 px-8 rounded mb-8 hover:bg-white hover:text-black ease-linear duration-200",
        svgIconClass = "absolute w-7 top-2 right-28 cursor-pointer";
        
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center"
                onBlur={(e: any) => {
                    if (e.target.id === 'email') {
                        val.validationEmail(e);
                    }
                    if (e.target.id === 'password') {
                        val.validationPassword(e);
                    }
                }}
            >
                <form
                    action=""
                    method="get"
                    className="flex flex-col h-fit justify-around items-center text-center xl:w-2/5 2xl:w-1/4 border border-zinc-900 px-2 py-10 rounded-3xl bg-zinc-900"             
                >   
                    <h3 className='text-3xl uppercase tracking-widest mb-1'>Sign in</h3>
                    <h5 className='text-zinc-400 text-base mb-10'>Please enter you login and password!</h5>
                    <Input 
                        className={inputClass}
                        props={{type: "text", placeholder: "Email", id: 'email'}}
                    />
                    <div className="flex w-full items-center relative flex-col">
                        <Input 
                            className={inputClass}
                            props={{type: type, placeholder: "Password", id: 'password'}}
                        />
                        {
                            show ? <EyeShow className={svgIconClass} onClick={() => setShow(false)} /> : <EyeShowSlash className={svgIconClass} onClick={() => setShow(true)} />
                        }
                    </div>

                    <span className='text-zinc-400 cursor-pointer text-base mb-10'>Forgot password?</span>

                    <Button
                        {...{onClick: () => console.log('test'), type: "button", className: buttonClass, children: "Sign in"}}
                    />
                    
                    <div className='mb-10 w-1/3 flex'>
                        <Social />
                    </div>
                    <h5 className='text-lg'>Don`t have an account?
                        <Link to="/sign-up">
                            <span className='text-zinc-400 cursor-pointer'> Sign up</span>
                        </Link>
                    </h5>
                </form>
            </div>
        </>
    )
}

export default FormSignIn;