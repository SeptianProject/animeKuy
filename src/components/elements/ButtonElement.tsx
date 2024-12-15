import React from "react";

interface ButtonElementProps {
     onClick?: () => void
     text: string
     className?: string
     disabled?: boolean
     type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'] | 'button'
}

const ButtonElement: React.FC<ButtonElementProps> = ({
     onClick, text, className, type, disabled
}) => {
     return (
          <button
               onClick={onClick}
               disabled={disabled}
               type={type}
               className={`bg-blue-600 py-2 px-4 rounded-md 
               hover:bg-blue-700 transition-all duration-300
               ${className}`}>
               {text}
          </button>
     );
}

export default ButtonElement;