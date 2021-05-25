import './Search.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
    // Search function:
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([])
    const first5 = products.slice(0, 5);

    const handleChange = event => {
        setSearch(event.target.value);
        getDataFromApi();
        // ...
    }

    // Search dynamic route func:
    const getDataFromApi = () => {
        fetch(`http://localhost:5200/search-products?name=${search}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }
    // console.log('Data', first5);

    return (
        <div>
            <form className="search" method="" action="" >
                <input onChange={handleChange} type="search" placeholder="Search products or categories. . ." />
                <ul className="results">
                    {
                        first5.map(f =>
                            <Link to={'/product-collection/' + f.category}>
                                <li>
                                    {f.name} <br />
                                    <span className="categories-children">#{f.category}</span>
                                </li>
                            </Link>
                        )
                    }
                </ul>
            </form>
        </div>
    );
}

export default Search;