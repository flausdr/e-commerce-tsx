interface ButtonProps {
    onClick: () => void;
    children: any;
}

export const Button = (props: ButtonProps) => (
    <button {...props}>{props.children}</button>
)