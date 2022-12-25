import React from "react";
import cl from './Button.module.css';

export default function Button ({children, fn, ...props}) {

    return (
        <button {...props} className={`${cl.button} ${props.className}`}>
            {children}
        </button>
    );
};