import React from "react";
import { IconType } from "react-icons";

interface IconElementProps {
     icon: IconType
     onClick?: () => void
     className?: string
}

const IconElement: React.FC<IconElementProps> = ({
     icon: IconElement,
     onClick,
     className
}) => {
     return (
          <IconElement
               onClick={onClick}
               className={`size-6 text-white/80 cursor-pointer
               ${className}`}
          />
     );
}

export default IconElement;