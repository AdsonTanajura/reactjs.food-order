import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

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
      {cardIsShown && <div>Card...</div>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
