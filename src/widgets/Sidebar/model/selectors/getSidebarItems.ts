import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/Home.svg';

import {
    getRouteMain,
} from '@/shared/const/router';
import { SidebarItemType } from '../types/sidebar';


export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
    const sidebarItems: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Главная',
        }
    ];

    if (authData) {
        sidebarItems.push(
            // можно добавить ссылки на страницы с авторизацией
        );
    }
    return sidebarItems;
});
