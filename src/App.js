import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cardIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(true);
  };

  function hideCartHandler() {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cardIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
