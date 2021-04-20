import { useEffect, useState } from 'react';
import './App.css';
import Header from './header'
import Cart from './cart'
import Home from './home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { db } from "../firebase"


function App() {
  const [cartItems, setCartItems] = useState([])

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems);
    })
  }

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header cartItems={cartItems} />
        <Switch>
          <Route path="/" exact  >
            <Home />
          </Route>
          <Route path="/cart" exact >
            <Cart cartItems={cartItems} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
