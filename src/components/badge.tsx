import  React from 'react';
import { cva, type VariantProps, cx } from 'class-variance-authority';
import Text from './text';
import Skeleton from './skeleton';

export const badgeVariants = cva("inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold", {
    variants: {
        variant: {
            none: "",
            primary: "bg-green-light",
            secondary: "bg-pink-light",
        },
        size: {
            sm: "py-0.5 px-2",
        }
    }
, defaultVariants: {
        variant: "primary",
        size: "sm",
    }
});

export const badgeTextVariants = cva("",
    {
        variants: {
            variant: {
                none: "",
                primary: "text-green-dark",
                secondary: "text-pink-dark",
            },
        },
        defaultVariants: {
            variant: "primary", 
        }
    }
);

    export const badgeSkeletonVariants = cva ("", {
        variants:{
            size: {
                sm: "w-6 h-6"
            }
        },
        defaultVariants: {
            size: "sm",
        }
    })

interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {
    loading?: boolean;
}

export default function Badge({
    variant, 
    size, 
    className, 
    children,
    loading,
    ...props
}: BadgeProps) {
    if (loading) {
        return <Skeleton 
        rounded="full"
        className={cx(
            badgeVariants({ variant: "none" }),
            badgeSkeletonVariants({ size }),
            className

)}
        />
    }
    return (
        <div className={`${badgeVariants({ variant, size })} ${className ?? ""}`}
            {...props}>
            <Text
                variant={"body-sm-bold"}
                className={badgeTextVariants({ variant })}
            >
                {children}
            </Text>
        </div>

    )
}