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
            <div className="">
                <form action="">
                    <div className="search-control">
                        <p><input onChange={handleChange} type="text" placeholder="Search products or categories. . ." /></p>
                    </div>
                </form>
            </div>
            <div className="">
                <ul>
                    {
                        first5.map(f =>
                            <Link to={'/product-collection/' + f.category}>
                                <li>
                                    {f.name}
                                </li>
                            </Link>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Search;