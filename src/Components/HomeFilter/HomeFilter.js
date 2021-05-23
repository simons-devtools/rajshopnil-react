import { useEffect, useState } from "react";
import Home from "../Home/Home";

const HomeFilter = () => {
    const [allCollection, setAllCollection] = useState([]);

    useEffect(() => {
        const urlOne = 'http://localhost:5200/products';
        fetch(urlOne)
            .then(res => res.json())
            .then(data => setAllCollection(data))
    }, [])

    // Filtered of the colloection one:
    // const [filterOne, setFilterOne] = useState([]);

    const elecDevice1 = allCollection.filter(prod => prod.category === 'smart-phone');
    const smartPhone = elecDevice1.slice(0, 1);

    const elecDevice2 = allCollection.filter(prod => prod.category === 'tablet');
    const tablet = elecDevice2.slice(0, 1);

    const elecDevice3 = allCollection.filter(prod => prod.category === 'laptop');
    const laptop = elecDevice3.slice(0, 1);

    const elecDevice4 = allCollection.filter(prod => prod.category === 'desktop');
    const desktop = elecDevice4.slice(0, 1);

    const elecDevice5 = allCollection.filter(prod => prod.category === 'feature-phone');
    const featurePhone = elecDevice5.slice(0, 1);

    const elecDevice6 = allCollection.filter(prod => prod.category === 'security-camera');
    const securityCamera = elecDevice6.slice(0, 1);

    const filterOne = [smartPhone, tablet, laptop, desktop, featurePhone, securityCamera];
    // console.log('Filter', filterOne);

    return (
        <div>
            {
                // filterOne.map(pd => <Home filterOne={pd} key={pd._id} />)
            }
        </div>
    );
};

export default HomeFilter;