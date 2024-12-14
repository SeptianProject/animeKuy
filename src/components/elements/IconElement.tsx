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
               className={`size-7 md:size-10 text-white cursor-pointer
               ${className}`}
          />
     );
}

export default IconElement;