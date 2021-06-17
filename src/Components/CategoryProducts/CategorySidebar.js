import React from 'react';
import filterMenu from './filterMenu';
import { Link } from 'react-router-dom';

const CategorySidebar = () => {
    const allMenu = filterMenu;
    console.log('Manus', allMenu);

    return (
        <div>
            <div className="sidebar-wrapper">
                <h2>Filter all categories products</h2>
                <ul>
                    {
                        allMenu.map(menu =>
                            <li className="dropdown-parent">{menu.dropdownItem}
                                <ul className="dropdown-child">
                                    {
                                        menu.menuItem.map(sub => <Link to={sub.route} > <li>{sub.item}</li></Link>)
                                    }
                                </ul>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="sidebar-wrapper">
                <h2>Products filter by</h2>
            </div>
        </div>
    );
};

export default CategorySidebar;