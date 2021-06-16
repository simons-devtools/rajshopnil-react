import './Home.css';
import { useState, useEffect } from 'react';
import BannerSetting from '../../images/all-images/Banner.jpg';
import Loading from '../../images/icons/loading.gif';
import CollectionOne from '../CollectionOne/CollectionOne';
import CollectionTwo from '../CollectionTwo/CollectionTwo';
import CollectionThree from '../CollectionThree/CollectionThree';
import CollectionFour from '../CollectionFour/CollectionFour';
import CollectionFive from '../CollectionFive/CollectionFive';
import CollectionSix from '../CollectionSix/CollectionSix';
import CollectionSeven from '../CollectionSeven/CollectionSeven';
import CollectionEight from '../CollectionEight/CollectionEight';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Container } from '@material-ui/core';
import Filter6Icon from '@material-ui/icons/Filter6';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter4Icon from '@material-ui/icons/Filter4';

const Home = () => {
    const [allCollection, setAllCollection] = useState([]);

    // All data loaded:
    useEffect(() => {
        const url = 'http://localhost:5200/products';
        fetch(url)
            .then(res => res.json())
            .then(data => setAllCollection(data))
    }, [])

    // For the collection one only:
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

    const collectOne = [...smartPhone, ...tablet, ...laptop, ...desktop, ...featurePhone, ...securityCamera];
    // console.log('Filter one', collectOne);



    // const collectOne = allCollection.slice(0, 6);
    const collectTwo = allCollection.slice(21, 27);
    const collectThree = allCollection.slice(41, 46);
    const collectFour = allCollection.slice(61, 65);
    const collectFive = allCollection.slice(81, 86);
    const collectSix = allCollection.slice(101, 107);
    const collectSeven = allCollection.slice(30, 34);
    const collectEight = allCollection.slice(45, 57);
    // console.log('Data=', collectOne);

    return (
        <main>
            <div>
                <img src={BannerSetting} style={{ width: '100%' }} alt="home-banner-img" />
            </div>

            {
                allCollection.length <= 0 ? <img src={Loading} className="loading" alt="loading-img" /> :
                    <Container>
                        {/* Collection One */}
                        <div className="packages-blue">
                            <h1><Filter6Icon className="icons" /> Electronic Devices</h1>
                            <div className="collection-container">
                                {
                                    collectOne.map(collect => <CollectionOne oneCollection={collect} key={collect._id} />)
                                }
                            </div>
                        </div>

                        {/* Collection Two */}
                        <div className="packages-tomato">
                            <h1><span><Filter6Icon className="icons" /></span> Electronic Accessories</h1>
                            <div className="collection-container">
                                {
                                    collectTwo.map(collect => <CollectionTwo twoCollection={collect} key={collect._id} />)
                                }
                            </div>
                        </div>

                        {/* Collection Three */}
                        <div className="packages-blue">
                            <h1><Filter5Icon className="icons" /> Mens Fashions</h1>
                            <div className="collection-container">
                                {
                                    collectThree.map(collect => <CollectionThree threeCollection={collect} key={collect._id} />)
                                }
                            </div>
                        </div>

                        {/* Collection Four */}
                        <div className="packages-tomato">
                            <h1><span><Filter4Icon className="icons" /></span> TV and Home Appliances</h1>
                            <div className="collection-container">
                                {
                                    collectFour.map(collect => <CollectionFour fourCollection={collect} key={collect._id} />)
                                }
                            </div>
                        </div>

                        {/* Collection Five */}
                        <div className="packages-blue">
                            <h1><Filter5Icon className="icons" /> Womens Fashions</h1>
                            <div className="collection-container">
                                {
                                    collectFive.map(collect => <CollectionFive fiveCollection={collect} key={collect._id} />)
                                }
                            </div>
                        </div>

                        {/* Collection Six */}
                        <div className="packages-tomato">
                            <h1><span><Filter6Icon className="icons" /></span> Health and Beauty</h1>
                            <div className="collection-container">
                                {
                                    collectSix.map(collect => <CollectionSix sixCollection={collect} key={collect._id} />)
                                }
                            </div>
                        </div>

                        {/* Collection Seven */}
                        <div className="packages-tomato">
                            <h1><span><Filter4Icon className="icons" /></span> Sports and Outdoor</h1>
                            <div className="collection-container">
                                {
                                    collectSeven.map(collect => <CollectionSeven sevenCollection={collect} key={collect._id} />)
                                }
                            </div>
                        </div>

                        {/* Collection Eight */}
                        <div className="packages-blue">
                            <h1><LibraryAddIcon className="icons" /> All collection best selling categories products</h1>
                            <div className="collection-container">
                                {
                                    collectEight.map(collect => <CollectionEight eightCollection={collect} key={collect._id} />)
                                }
                            </div>
                            <div className="explore-btn">
                                <button>See More <DoubleArrowIcon className="icons" /></button>
                            </div>
                        </div>
                    </Container>
            }
        </main>
    );
};

export default Home;