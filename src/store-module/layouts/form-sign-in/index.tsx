import { Link } from "react-router-dom";

import Social from "../social";

const FormSignIn = () => {
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <form
                    action=""
                    method="get"
                    className="flex flex-col h-fit justify-around items-center text-center xl:w-2/5 2xl:w-1/4 border border-zinc-900 px-2 py-10 rounded-3xl bg-zinc-900"
                >   
                    <h3 className='text-3xl uppercase tracking-widest mb-1'>Sign in</h3>
                    <h5 className='text-zinc-400 text-base mb-16'>Please enter you login and password!</h5>
                    <input
                        type="text"
                        placeholder='Email'
                        className="px-2 py-2 bg-transparent border rounded outline-none input-text w-3/5 mb-5" />
                    <input
                        type="text"
                        placeholder='Password'
                        className="px-2 py-2 bg-transparent border rounded outline-none input-text w-3/5 mb-6" />
                    <span className='text-zinc-400 cursor-pointer text-base mb-14'>Forgot password?</span>
                    <button
                        type="submit"
                        className='border-2 text-xl tracking-widest uppercase py-3 px-8 rounded mb-8'
                    >Sign in</button>
                    <div className='mb-14 w-1/3 flex'>
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