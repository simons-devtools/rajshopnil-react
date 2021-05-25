import './App.css';
import React, { createContext, useState } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Review from './Components/Review/Review';
import AddProduct from './Components/AddProduct/AddProduct';
import Checkout from './Components/Checkout/Checkout';
import Payment from './Components/Payment/Payment';
import Footer from './Components/Footer/Footer';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CategoryProducts from './Components/CategoryProducts/CategoryProducts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const UserContext = createContext();
export const UserCartContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [getCart, setGetCart] = useState({});


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <UserCartContext.Provider value={[getCart, setGetCart]}>
        {/* <p>Email: {loggedInUser.email}</p> */}
        <Router>
          <Header />

          {/* Switch route start */}
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/addProducts">
              <AddProduct />
            </PrivateRoute>
            <Route path="/product-collection/:category">
              <CategoryProducts />
            </Route>
            <Route path="/product/:prodCategory/:prodKey">
              <ProductDetail />
            </Route>
            <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/review">
              <Review />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          {/* Switch route end */}

          <Footer />
        </Router>
      </UserCartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
