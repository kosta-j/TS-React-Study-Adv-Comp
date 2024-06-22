import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

type ContainerProps = {
    as:ElementType,
    children: ReactNode,
} & ComponentPropsWithoutRef<ElementType>;

export default function Container({as, children, ...props}: ContainerProps) {
const Component = as;
    return <Component {...props}>{children}</Component>
}