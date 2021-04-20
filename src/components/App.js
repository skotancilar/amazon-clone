import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Header from './header'
import Cart from './cart'
import Home from './home'
import Login from './login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { auth, db } from "../firebase"


function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
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

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null)
    })
  }

  useEffect(() => {
    getCartItems();
  }, []);
  console.log('user', user);
  return (
    <div className="App">
      <Router>
        {
          !user ? (
            <Login setUser={setUser} />
          )
            :
            (
              <Fragment>
                <Header
                  user={user}
                  cartItems={cartItems}
                  signOut={signOut}
                />
                <Switch>

                  <Route path="/" exact  >
                    <Home />
                  </Route>
                  <Route path="/cart" exact >
                    <Cart cartItems={cartItems} />
                  </Route>
                </Switch>
              </Fragment>
            )
        }

      </Router>
    </div>
  );
}

export default App;
