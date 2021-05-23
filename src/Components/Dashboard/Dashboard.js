import React from 'react';
import './Dashboard.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ProductManager from '../ProductManager/ProductManager';
import AddProduct from '../AddProduct/AddProduct';
import OrderReview from '../OrderReview/OrderReview';
import WishList from '../WishList/WishList';
import UserAccount from '../UserAccount/UserAccount';
import { Container } from '@material-ui/core';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other} >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexWrap: 'wrap',
        height: 324
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <div className={classes.root}>
                <Tabs orientation="vertical" variant="scrollable" value={value} aria-label="Vertical tabs example" className={classes.tabs} onChange={handleChange} >
                    <Tab label="Product Manager" {...a11yProps(0)} />
                    <Tab label="Add Products" {...a11yProps(1)} />
                    <Tab label="Orders review" {...a11yProps(2)} />
                    <Tab label="Your Wishlist" {...a11yProps(3)} />
                    <Tab label="My Account" {...a11yProps(4)} />
                    <Tab label="Log out" {...a11yProps(5)} />
                </Tabs>

                <TabPanel value={value} index={0}><ProductManager /></TabPanel>
                <TabPanel value={value} index={1}><AddProduct /></TabPanel>
                <TabPanel value={value} index={2}><OrderReview /></TabPanel>
                <TabPanel value={value} index={3}><WishList /></TabPanel>
                <TabPanel value={value} index={4}><UserAccount /></TabPanel>
                <TabPanel value={value} index={5}>
                    <h1>You are confirm to the Log out this site??</h1>
                </TabPanel>
            </div>
        </Container>
    );
};

export default Dashboard;