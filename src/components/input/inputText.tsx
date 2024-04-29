import React from "react";

interface InputTextProps{
    id?: string;
    style?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string;
}

export const InputText: React.FC<InputTextProps> = ({id, style, onChange, placeholder}) => {
    return (
        <input id={id} 
            type='text' 
            onChange={onChange}
            placeholder={placeholder}
            className={`${style} border px-5 py-2 rounded-lg text-gray-900`}/>
    )
}