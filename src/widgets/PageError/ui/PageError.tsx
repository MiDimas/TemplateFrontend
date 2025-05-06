import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div
            className={classNames(cls.PageError, {}, [className])}
        >
            <p>{t('Что-то пошло не так...')}</p>
            <button onClick={reloadPage}>{t('Обновить страницу')}</button>
        </div>
    );
});
