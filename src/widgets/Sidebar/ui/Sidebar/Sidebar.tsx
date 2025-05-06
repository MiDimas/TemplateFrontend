import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
// import { BugButton } from 'app/providers/ErrorBoundary';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import ArrowIcon from "@/shared/assets/icons/Arrow.svg"
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };
    const sidebarItemList = useSelector(getSidebarItems);
    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                {
                    [cls.collapsed]: collapsed,
                },
                [className],
            )}
        >
            <div role="navigation" className={cls.items}>
                {sidebarItemList.map((item) => (
                    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
                ))}
            </div>
            <ArrowIcon
                data-testid="toggle-sidebar"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
            />
            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.themeSwitcher} />
            </div>
        </aside>
    );
});
