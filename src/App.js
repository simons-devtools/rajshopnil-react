import './App.css';
import React, { createContext, useState } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Review from './Components/Review/Review';
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
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();
export const UserCartContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [userCart, setUserCart] = useState([]);


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <UserCartContext.Provider value={[userCart, setUserCart]}>
        <Router>
          <Header />

          {/* Switch route start */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/product-collection/:category">
              <CategoryProducts />
            </Route>
            <Route path="/product/:category/:prodKey">
              <ProductDetail />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/review">
              <Review />
            </PrivateRoute>
            <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
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
