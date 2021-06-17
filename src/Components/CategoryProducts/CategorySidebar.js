import React from 'react';
import menus from './menus';
import { Link } from 'react-router-dom';

const CategorySidebar = () => {
    const allMenus = menus;
    // console.log('Manus', allMenus);

    return (
        <div className="sidebar-wrapper">
            <h2>This is sidebar contents</h2>
            <ul>
                {
                    allMenus.map(menu => < Link to={menu.route} > <li>{menu.name}</li></Link>)
                }
            </ul>
        </div >
    );
};

export default CategorySidebar;