import { FC } from "react";

interface CheckboxProps {
    text: string;
    className: string;
    propsLabel: any;
    propsInput: any;
}

export const Checkbox: FC<CheckboxProps> = ({text, className, propsLabel, propsInput}) => {
    return (
        <span className={className}>
            <label {...propsLabel}>{text}</label>
            <input type="checkbox" {...propsInput} />
        </span>
    )
}