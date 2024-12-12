import React from "react";
import { FieldError } from "react-hook-form";

interface InputElementProps extends React.InputHTMLAttributes<HTMLInputElement> {
     error?: FieldError | undefined
}

const InputElement = React.forwardRef<HTMLInputElement, InputElementProps>(({
     error,
     ...props
}, ref) => {
     return (
          <div>
               <input
                    {...props}
                    ref={ref}
                    autoComplete="on"
                    className={`py-2 px-4 rounded-md w-64 border-none outline-none
                              focus:ring focus:ring-blue-600 transition-all duration-300
                              placeholder:text-secondary/60 placeholder:font-medium
                              ${error && 'focus:ring-red-600'}`} />
               {error && (
                    <p className="text-redDanger text-[12px] text-start mt-1 text-red-500">{error.message}</p>
               )}
          </div>
     )
})

InputElement.displayName = 'InputElement'

export default InputElement