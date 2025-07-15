import React from "react";
import { cva, type VariantProps } from "class-variance-authority";



export const iconsVariants = cva ( "", {
    variants:{
        animate:{
            false:"",
            true: "animate-spin",
        }
    }

, defaultVariants: {
        animate: false,
    }
})

interface iconsProps extends 
React.ComponentProps<"svg">, 
VariantProps<typeof iconsVariants> {
    svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({svg: SvgComponent, animate, className, ...props}: iconsProps) {
    return <SvgComponent className={iconsVariants({animate, className})} {...props} />;

}
