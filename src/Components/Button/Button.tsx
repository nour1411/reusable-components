import React from 'react'

interface buttonProps{
    text :string;
    onClick: ()=>void;
    variant: "primary" | "secondary" | "danger" | "success";
  disabled?: boolean;
}

const variantStyles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
  success: "bg-green-600 text-white hover:bg-green-700",
};
export default function Button({text , onClick,variant,disabled}: buttonProps) {
  return (
    <>
    <button onClick={onClick}
     disabled={disabled} 
     className={`px-4 py-2 rounded-md font-medium ${variantStyles[variant]} ${disabled? "opacity-50 cursor-not-allowed": ""} `} >
        {text}
    </button>
    </>
  )
}
