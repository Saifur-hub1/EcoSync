import * as React from 'react';
import {cn} from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface InputType {
    type: string;
}
export interface InputProps {
    type: string;
    placeholder: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
    name?: string;
    id?: string;
    required?: boolean;
    disabled?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    readOnly?: boolean;
    step?: number;
    size?: number;
    min?: number;
    max?: number;
    multiple?: boolean;
    accept?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    defaultValue?: string;
    ref?: React.Ref<HTMLInputElement>;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
    
const Input = ({type, className, ...props}: InputProps) => {
    return (
        <input 
            type={type} 
            className={cn("pl-2 p-1 text-black border-1 border-black rounded-sm", className)} 
            {...props}
        />
    )
}

export default Input;