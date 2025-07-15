import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import Icon from "./icon";
import CheckIcon from "../assets/icons/check.svg?react";
import Skeleton from "./skeleton";

export const inputCheckboxWrapperVariants = cva (`
    inline-flex items-center justify-center relative group
    cursor-pointer
    
    `)

export const inputCheckboxVariants = cva (`
    appearance-none peer items-center flex justify-center
    transition overflow-hidden
   
   
    `
, {
    variants: {
        variant: {
            none: "",
            default: ` 
            border-2 border-solid
            border-green-base hover:border-green-dark hover:bg-green-dark/20
            checked:border-green-base checked:bg-green-base
            group-hover:checked:border-green-dark 
            group-hover:checked:bg-green-dark`,
    },
        size: {
            sm: "w-5 h-5 rounded-sm",
        },
        disabled: {
            true: "pointer-events-none",
        }
    },
    defaultVariants: {
        variant: "default",
        size: "sm",
        disabled: false,
    }
})

export const inputCheckboxIconVariants = cva (`
    absolute top-1/2 left-1 -translate-y-1/2
    peer-checked:block hidden fill-white
    `, {
    variants: {
        size: {
            sm: "w-3 h-3",
        }
    },
    defaultVariants: {
        size: "sm",
    }
    })

    interface InputCheckBoxProps extends VariantProps<typeof inputCheckboxVariants>,
        Omit<React.ComponentProps<"input">, "size" | "disabled"> {
            loading?: boolean;
        }


    
export default function InputCheckBox({
    variant,
    className,
    size,
    loading,
    disabled,
    ...props
}: InputCheckBoxProps) {
    if (loading) {
        return <Skeleton rounded="sm"className={inputCheckboxVariants({variant:"none", size})}/>

    }
    return (
        <label className={inputCheckboxWrapperVariants({className})}>
            <input type="checkbox" className={inputCheckboxVariants({variant, size, disabled})} {...props}/>
            <Icon svg={CheckIcon}  className={inputCheckboxIconVariants({size})}/>
        </label>

    )
}