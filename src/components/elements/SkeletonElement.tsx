import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

interface SkeletonElementProps {
     circle?: boolean;
     count?: number;
     className?: string;
}

const SkeletonElement: React.FC<SkeletonElementProps> = ({
     circle,
     count,
     className
}) => {
     return (
          <div className={`${className ?? 'size-20'} rounded-xl`}>
               <Skeleton circle={circle} count={count} className="size-full" />
          </div>
     );
}

export default SkeletonElement;