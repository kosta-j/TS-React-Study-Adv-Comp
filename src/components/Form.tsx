import {
    forwardRef,
    useImperativeHandle,
    useRef,
    type ComponentPropsWithRef,
    type FormEvent,
} from 'react';

export type FormHandle = {
    clear: () => void;
};

type FormProps = ComponentPropsWithRef<'form'> & {
    onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
    { onSave, children, ...otherProps },
    ref
) {
    const form = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current?.reset();
                console.log('cleared');
            },
        };
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
        form.current?.reset();
    }
    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={form}>
            {children}
        </form>
    );
});

export default Form;
