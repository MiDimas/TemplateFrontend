import { ReactNode, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TestProps } from '@/shared/types/tests/tests';
import cls from './Page.module.scss';


interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
}

export const Page = (props: PageProps) => {
    const { className, children, 'data-testid': dataTestId = 'Page' } = props;
    const wrapperRef = useRef<HTMLDivElement>(null);

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            data-testid={dataTestId}
        >
            {children}
        </main>
    );
};
