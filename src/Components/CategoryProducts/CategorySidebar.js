import React from 'react';
import filterMenu from './filterMenu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const CategorySidebar = () => {
    const allMenu = filterMenu;
    // console.log('Manus', allMenu);

    return (
        <div>
            <div className="sidebar-wrapper">
                <h2>Filter all categories products</h2>
                <ul>
                    {
                        allMenu.map(menu =>
                            <li className="dropdown-parent">
                                <span>{menu.dropdownItem}</span>
                                <span><ExpandMoreIcon className="choose" /></span>
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
                <h2>Products filter by custom input</h2>
                <ul>
                    <li className="dropdown-parent">
                        <span>Price</span>
                        <span className="choose"><ExpandMoreIcon /></span>
                        <ul className="dropdown-child">
                            <li>11 - 25</li>
                            <li>26 - 40</li>
                            <li>41 - 55</li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li className="dropdown-parent">
                        <span>Color</span>
                        <span className="choose"><ExpandMoreIcon /></span>
                        <ul className="dropdown-child">
                            <li>Green</li>
                            <li>Blue</li>
                            <li>Violet</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CategorySidebar;