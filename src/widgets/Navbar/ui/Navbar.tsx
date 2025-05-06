import { memo } from 'react';
// import { useTranslation } from 'react-i18next';
// import { LoginModal } from '@/features/AuthByUsername';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
// import {ToggleFeatures} from "@/shared/lib/features";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    // const { t } = useTranslation();
    // const [isOpen, setIsOpen] = useState(false);

    // const closeHandler = useCallback(() => {
    //     setIsOpen(false);
    // }, []);
    // const openHandler = useCallback(() => {
    //     setIsOpen(true);
    // }, []);
    

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
                    {/* <button className={cls.links} onClick={openHandler}>
                        {t('Войти')}
                    </button>
                    {isOpen && <LoginModal isOpen={isOpen} onClose={closeHandler}/>} */}
        </header>

    );
});
