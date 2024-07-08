// A Card Component That Has Multiple "Slots"

import { ReactNode } from 'react';

type CardProps = {
    title: string;
    children: ReactNode;
    actions: ReactNode;
};

export default function Card({ title, children, actions }: CardProps) {
    return (
        <div className="flex w-40 flex-col items-center gap-2 overflow-hidden rounded-lg border border-teal-200">
            <h3 className="flex h-full min-h-10 w-full items-center justify-center bg-teal-200 p-2 font-semibold text-[#294a52]">
                {title}
            </h3>
            <div className="flex h-full w-full flex-col items-center gap-4 p-2">
                {children}
                {actions}
            </div>
        </div>
    );
}
