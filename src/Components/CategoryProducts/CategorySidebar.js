import React from 'react';
import megaMenu from './megaMenu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const CategorySidebar = () => {
    const allMenu = megaMenu;

    // All filter products by: (price)
    // const oneHandredFourtyNine = products.filter(prod => prod.price <= 149);
    // const twoHandredFourtyNine = products.filter(prod => prod.price >= 150 && prod.price <= 249);
    // const twoHandredFiftyUp = products.filter(prod => prod.price >= 250);

    return (
        <div className="sticky-sidebar">
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
                <h2>Products filter by custom filed</h2>
                <ul>
                    <li className="dropdown-parent">
                        <span>Price</span>
                        <span className="choose"><ExpandMoreIcon /></span>
                        <ul className="dropdown-child">
                            <li>1 - 149</li>
                            <li>150 - 249</li>
                            <li>250 - 350+</li>
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