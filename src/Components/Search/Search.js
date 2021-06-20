import './Search.css';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
    // Search function:
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([])
    // const first10 = products.slice(0, 10);

    const handleChange = event => {
        setSearch(event.target.value);
        fetch(`http://localhost:5200/search-products?name=${search}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }

    function searchResult(event) {
        const searchProduct = document.getElementById("searchProduct");
        searchProduct.style.display = "none";
        setSearch(event);
    }

    // Popup modal open && close func:
    // document.addEventListener("click", function (event) {
    //     if (
    //         event.target.matches(".close-modal") ||
    //         !event.target.closest(".results")
    //     ) {
    //         closeModal();
    //     }
    // },
    //     false
    // );

    // function closeModal() {
    //     document.querySelector(".results").style.display = "none";
    // }

    return (
        <div>
            <form className="search" method="" action="" >
                <input onChange={handleChange} type="text" placeholder="Search products or categories. . ." />
                <div id="searchProduct" className="results">
                    <ul>
                        {
                            products.map(f =>
                                <Link to={`/product-collection/${f.category}`}>
                                    <li onClick={() => searchResult(f.name)} id="SearchValue">
                                        <span><DoubleArrowIcon className="search-icons" /> {f.name}</span>
                                        <span>{f.category}</span>
                                    </li>
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