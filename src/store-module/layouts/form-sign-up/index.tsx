import Input from "../../../ui/input";
import { Button } from "../../../ui/button";
import { Checkbox } from "../../../ui/checkbox";
import { useState } from "react";

const FormSignUp = () => {
    const inputClass = "px-2 py-2 bg-transparent border rounded outline-none input-text w-3/5 mb-3",
        buttonClass = "border-2 text-xl tracking-widest uppercase py-3 px-8 rounded mb-8 hover:bg-white hover:text-black ease-linear duration-200",
        checkboxClass = "appearance-none border w-5 h-5 relative top-1 checked:border-b-2 checked:border-r-2 checked:border-t-0 checked:border-l-0 checked:rotate-45 checked:w-3 checked:h-4 checked:top-0 checked:left-1 ease-linear duration-100";

    const [isChecked, setIsChecked] = useState('male')

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <form 
                action=""
                method="get" 
                className="flex flex-col h-fit justify-around items-center text-center xl:w-2/5 2xl:w-1/4 border border-zinc-900 px-2 py-10 rounded-3xl bg-zinc-900"
                >
                <h3 className='text-3xl uppercase tracking-widest mb-7'>Sign up</h3>
                <Input 
                    className={inputClass}
                    props={{type: "text", placeholder: "Your name"}}
                />
                <Input 
                    className={inputClass}
                    props={{type: "text", placeholder: "Email"}}
                />
                <Input 
                    className={inputClass}
                    props={{type: "text", placeholder: "Phone"}}
                />
                <Input 
                    className={inputClass}
                    props={{type: "text", placeholder: "Password"}}
                />
                <Input 
                    className={inputClass}
                    props={{type: "text", placeholder: "Repeat your password"}}
                />

                <div className="w-2/3 justify-around flex mb-7 text-xl mt-4">
                    <Checkbox 
                        text={"Male"}
                        className={'gender'}
                        propsLabel={{htmlFor: "male", className: "mr-2"}}
                        propsInput={{id: "male", className: checkboxClass, checked: (isChecked === 'male'), onChange: () => setIsChecked('male')}}
                    />
                    <Checkbox 
                        text={"Female"}
                        className={'gender'}
                        propsLabel={{htmlFor: "female", className: "mr-2"}}
                        propsInput={{id: "female", className: checkboxClass, checked: (isChecked === 'female'), onChange: () => setIsChecked('female')}}
                    />
                    <Checkbox 
                        text={"Other"}
                        className={'gender'}
                        propsLabel={{htmlFor: "other", className: "mr-2"}}
                        propsInput={{id: "other", className: checkboxClass, checked: (isChecked === 'other'), onChange: () => setIsChecked('other')}}
                    />
                </div>

                <Button
                    {...{onClick: () => console.log('test'), type: "button", className: buttonClass, children: "Submit form"}}
                />
            </form>
        </div>
    )
}

export default FormSignUp;