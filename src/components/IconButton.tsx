// Example: A Button component that has an icon and text
// The icon is passed via a prop, which is a function that returns JSX code

import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type IconButtonProps = {
    icon: ElementType;
    onClick: () => void;
    children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export default function IconButton({
    icon: Icon,
    children,
    ...otherProps
}: IconButtonProps) {
    return (
        <button {...otherProps}>
            <span>
                <Icon />
            </span>
            <span>{children}</span>
        </button>
    );
}
