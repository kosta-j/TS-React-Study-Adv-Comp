import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type InputPropTypes = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputPropTypes>(function Input(
    { label, id, ...props }: InputPropTypes,
    ref
) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" name={id} ref={ref} {...props} />
        </p>
    );
});

export default Input;
