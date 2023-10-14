import React from 'react';

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    // icon?: string;
    css: string
}

const Button = (props: ButtonProps) => {
    return (
        <button className={`${props.css} px-4 py-2 rounded-full`} type={props.type} >
            { props.title }
        </button>
    );
}

export default Button;
