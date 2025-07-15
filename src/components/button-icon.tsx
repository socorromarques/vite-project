import Icon from "./icon";
import React from "react";
import { cva, type VariantProps} from "class-variance-authority";
import Skeleton from "./skeleton";

export const buttonIconVariants = cva (`
    inline-flex items-center justify-center
    cursor-point transition group
    `, {
        variants: {
            variant: {
                none: "",
                primary: "bg-green-base hover:bg-green-dark",
                secondary: "bg-gray-200 hover:bg-pink-base",
                tertiary: "bg-transparent hover:bg-gray-300"
            },

            size: {
                sm: "w-6 h-6 p-1 rounded",
            },

            disabled: {
                true: "opacity-50 pointer-events-none",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "sm",
            disabled: false,
        },
        })

export const buttonIconIconVariants = cva("transition", {
    variants: {
        variant:{
            none: "",
            primary: "fill-white",
            secondary: "fill-pink-base group-hover:fill-white",
            tertiary: "fill-gray-500 group-hover:fill-gray-500"
        },
        size: {
            sm: "w-4 h-4"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm"
    }
})


          
interface ButtonIconProps extends VariantProps<typeof buttonIconVariants>, 
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
icon: React.ComponentProps<typeof Icon>["svg"],
loading?: boolean;
}

export default function ButtonIcon({
    variant,
    size,
    disabled,
    className,
    loading,
    icon: IconComponent,
    ...props
}: ButtonIconProps) {
    if (loading) {
        return <Skeleton 
        rounded="sm"
        className={buttonIconIconVariants({ 
            variant: "none", 
            size, 
            className
         })}
         />
    } 

    return (
       <button className={buttonIconVariants({ variant, size, disabled, className })} 
       {...props}>
        <Icon
            svg={IconComponent} className={buttonIconIconVariants({ variant, size })} />
       </button>

    )
}

