import Social from "../social";

const FormSignUp = () => {
    return (
        <>
        <div className="w-screen h-screen flex justify-center items-center">
            <form 
                action=""
                method="get" 
                className="flex flex-col h-fit justify-around items-center text-center xl:w-2/5 2xl:w-1/4 border border-zinc-900 px-2 py-10 rounded-3xl bg-zinc-900"
                >
                <h3 className='text-3xl uppercase tracking-widest mb-7'>Sign up</h3>
                <input 
                    type="text"
                    placeholder="Your Name"
                    className="px-2 py-2 bg-transparent border rounded outline-none input-text w-3/5 mb-3"
                />
                <input 
                    type="text"
                    placeholder='Email'
                    className="px-2 py-2 bg-transparent border rounded outline-none input-text w-3/5 mb-3" />
                <input 
                    type="text"
                    placeholder='Phone'
                    className="px-2 py-2 bg-transparent border rounded outline-none input-text w-3/5 mb-3" />
                <input 
                    type="text"
                    placeholder='Password'
                    className="px-2 py-2 bg-transparent border rounded outline-none input-text w-3/5 mb-3" />
                <input 
                    type="text"
                    placeholder='Repeat your password'
                    className="px-2 py-2 bg-transparent border rounded outline-none input-text w-3/5 mb-7" />
                <div className="w-2/3 justify-around flex mb-7 text-xl">
                    <span>
                        <label htmlFor="male" className="mr-2">Male</label>
                        <input type="checkbox" id="male" />
                    </span>
                    <span>
                        <label htmlFor="female" className="mr-2">Female</label>
                        <input type="checkbox" id="female" />
                    </span>
                    <span>
                        <label htmlFor="other" className="mr-2">Other</label>
                        <input type="checkbox" id="other" />
                    </span>
                </div>
                <button 
                    type="submit" 
                    className='border-2 text-xl tracking-widest uppercase py-3 px-8 rounded mb-8'
                >Submit form</button>
            </form>
        </div>
        </>
    )
}

export default FormSignUp;