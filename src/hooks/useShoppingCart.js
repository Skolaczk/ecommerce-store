import React, { useState, useContext, useEffect } from 'react';

const ShoppingCartContext = React.createContext({});

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  useEffect(() => {
    const getShoppingCartItems = JSON.parse(
      localStorage.getItem('shoppingCartItems')
    );

    if (getShoppingCartItems) {
      setShoppingCartItems(getShoppingCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'shoppingCartItems',
      JSON.stringify(shoppingCartItems)
    );
  }, [shoppingCartItems]);

  const handleRemoveItem = (id) => {
    const filteredShoppingCartItems = shoppingCartItems.filter(
      (item) => item.id !== id
    );
    setShoppingCartItems(filteredShoppingCartItems);
  };

  const handleAddItem = (item) => {
    const matchingPhone = shoppingCartItems.find(({ id }) => id === item.id);
    if (matchingPhone) {
      console.log('Ten produkt jest już w koszyku');
      return;
    }
    setShoppingCartItems([...shoppingCartItems, item]);
  };

  const handleRemoveAllItems = () => setShoppingCartItems([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartItems,
        handleRemoveItem,
        handleAddItem,
        handleRemoveAllItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  const shoppingCartContext = useContext(ShoppingCartContext);

  if (!shoppingCartContext) {
    throw Error('useShoppingCart needs to be used inside ShoppingCartContext');
  }

  return shoppingCartContext;
};
