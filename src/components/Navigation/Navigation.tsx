import React from "react";
import './_navigation.scss';

interface MenuItemsProps {
    label: string,
}

interface NavigationProps {
    menuItems: MenuItemsProps[]
}

const Navigation: React.FC<NavigationProps> = ({menuItems}) => {
    return (
        <nav className="hackidea__nav">
            <ul>
                {menuItems.map((menu: MenuItemsProps) => {
                    return <li key={menu.label} className="hackidea__nav__item">
                        <a href="#">{menu.label}</a>
                        <span className="hackidea__nav__indicator"></span>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Navigation;