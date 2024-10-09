import './App.css';

import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './common/header/Header';
import Pages from './pages/Pages';
import Cart from './common/Cart/Cart';
import Footer from './common/footer/Footer';

import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import Kids from './pages/Kids/Kids';
import Contact from './pages/Contact/Contact';
import Allproducts from './pages/All-Products/Allproducts';


import Register from "./components/register/Register"
import Data from './components/flashDeals/Data';
import Sdata from './components/shop/Sdata';
import Pdata from './pages/All-Products/All-product-data';

import ScroolTop from './common/scroolTop/scroolTop';





function App() {

  //stpe 1: fetch data from database
  const { productItems } = Data
  const { shopItems } = Sdata
  const { allproduct } = Pdata



  const [cartItem, setCardItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCardItem(cartItem.map((item) =>
      (item.id === product.id ?
        { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }


  return (
    <>

      <ScroolTop />

      <Router>
        <Header cartItem={cartItem} />
        <Switch>

          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>

          <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>

          <Route path="/men" exact>
            <Men allproduct={allproduct} addToCart={addToCart} />
          </Route>

          <Route path="/women" exact>
            <Women />
          </Route>

          <Route path="/kids" exact>
            <Kids />
          </Route>

          <Route path="/all-products" exact>
            <Allproducts allproduct={allproduct} addToCart={addToCart} />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>

          {/* <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} /> */}

<Route path="/register" exact>
  <Register/>
</Route>
        </Switch>
        <Footer />
      </Router>



    </>
  );
}

export default App;
