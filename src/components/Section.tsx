import { ReactNode } from 'react';

type SectionProps = {
    children: ReactNode;
    title?: string;
};

export default function Section({ children, title }: SectionProps) {
    return (
        <section className="mt-8">
            {title && (
                <h2 className="mb-4 border-b font-semibold uppercase">
                    {title}
                </h2>
            )}
            {children}
        </section>
    );
}
