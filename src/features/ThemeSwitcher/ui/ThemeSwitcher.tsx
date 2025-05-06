import {memo, useCallback} from 'react';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import {LOCAL_STORAGE_THEME_KEY} from "@/shared/const/localstorage";

interface ThemeSwitcherProps {
    className?: string;
    startTheme?: Theme;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const toggleThemeHandler = useCallback(() => {
        toggleTheme?.((theme) => {
                if (theme) {
                    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
                }
            }
        )
    }, [toggleTheme]);
    return (
        <button
            className={classNames('', {}, [className])}
            onClick={toggleThemeHandler}
        >TM</button>
    );
});
