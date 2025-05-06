import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}
export const SidebarItem = memo((props: SidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const { item, collapsed = false } = props;
    if (item.authOnly && !isAuth) {
        return null;
    }
    const {text, path, Icon } = item;

    return (
        <NavLink
            to={path}
            className={({isActive}) => classNames(cls.SidebarItem, {
                [cls.collapsed]: collapsed,
                [cls.active]: isActive,
            })}
        >
            <div className={cls.block}>
                <Icon className={cls.icon}/>
                <span className={cls.link}>{t(text)}</span>
            </div>
        </NavLink>
    );
});
