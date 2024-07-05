import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react';

// Approach #1:
// type ContainerProps = {
//     as:ElementType,
//     children: ReactNode,
// } & ComponentPropsWithoutRef<ElementType>;

// export default function Container({ as, children, ...props }: ContainerProps) {
//   const Component = as;
//   return <Component {...props}>{children}</Component>;
// }

// Approach #2:
type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}
