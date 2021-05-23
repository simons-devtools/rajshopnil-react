import React from 'react';
import './ProductManager.css';
import EditAlt from '../../images/icons/edit.png';
import DeleteAlt from '../../images/icons/trush.png';

const ProductManager = () => {
    return (
        <div>
            <h1>Manages your products</h1>
            <div className="product-manager">
                <table>
                    <thead>
                        <td className="head">Products</td>
                        <td className="head">Authors</td>
                        <td className="head">Environments</td>
                        <td className="head">Price</td>
                        <td className="head">Action</td>
                    </thead>
                    <tbody>
                        <td className="all-product">Visual studio code</td>
                        <td className="all-product">Microsoft</td>
                        <td className="all-product">Code editor</td>
                        <td className="all-product">$5</td>
                        <td className="all-product">
                            <img src={EditAlt} className="action" alt="edit-alt" />
                            <img src={DeleteAlt} className="action" alt="delete-alt" />
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManager;