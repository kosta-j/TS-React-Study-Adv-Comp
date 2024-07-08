// Example: A Generic List Component
// This reusable component can be used to render a list of items of any type.
// The type of the items is passed via a generic type parameter.

import { ComponentPropsWithRef, ReactNode } from 'react';

type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => ReactNode;
} & ComponentPropsWithRef<'ul'>;

export default function List<T>({
    items,
    renderItem,
    ...otherProps
}: ListProps<T>) {
    return <ul {...otherProps}>{items.map(renderItem)}</ul>;
}
