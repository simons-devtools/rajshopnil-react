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
        fetch(`http://localhost:5200/search-products?name=${search}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }

    function searchResult() {
        const searchProduct = document.getElementById("searchProduct");
        searchProduct.style.display = "none";
    }

    return (
        <div>
            <form className="search" method="" action="" >
                <input onChange={handleChange} type="text" placeholder="Search products or categories. . ." />
                <div id="searchProduct" className="results">
                    <ul>
                        {
                            first5.map(f =>
                                <Link to={`/product-collection/${f.category}`}>
                                    <li onClick={searchResult}>{f.name}</li>
                                </Link>
                            )
                        }
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default Search;