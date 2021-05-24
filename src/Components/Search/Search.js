import './Search.css';
import React, { useEffect, useState } from 'react';

const Search = () => {
    // Search function:
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([])

    const handleChange = event => {
        setSearch(event.target.value);
        // ...
    }

    // Search dynamic route func:
    useEffect(() => {
        fetch(`http://localhost:5200/search-products?name=${search}`)
            .then(res => res.json())
            .then(data => {
                // console.log('Data', data);
                setProducts(data)
            })
    }, [search])
    // }
    console.log('Data', products);

    return (
        <div>
            <form action="">
                <div className="search-control">
                    <p><input onChange={handleChange} type="text" placeholder="Search products or categories. . ." /></p>
                    {/* <p className="search-btn">| Search</p> */}
                </div>
            </form>
        </div>
    );
}

export default Search;