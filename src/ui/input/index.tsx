import { FC } from "react";

interface InputProps {
    className: string;
    props: any;
}

const Input: FC<InputProps> = ({className = '', props}) => (
    <input className={`${className}`} {...props}  />
)

export default Input;