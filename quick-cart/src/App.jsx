<<<<<<< HEAD
=======
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { products } from './data/product';
import { useState } from 'react';
import CartSidebar from './components/CartSidebar';


>>>>>>> d381e7f (Part 2: Add Shopping cart with state management)
function App() {

   // TODO: Add state for cart items (array)
  // Hint: const [cart, setCart] = useState([]);
  const [cart,setCart] = useState([]);
  
  // TODO: Add state for cart visibility (boolean)
  // Hint: const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartOpen,setIsCartOpen] = useState(false);

  // TODO: Create addToCart function
  // This function should:
  // 1. Check if item already exists in cart
  // 2. If yes, increase quantity
  // 3. If no, add new item with quantity 1
  
  const addToCart = (product) => {
    console.log('Adding to cart:', product);
  // Check if product already in cart
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    // Product exists, increase quantity
    setCart(cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  } else {
    // New product, add with quantity 1
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};
  
  // TODO: Create removeFromCart function
  // This function should filter out the item by 
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };
  
  // TODO: Create updateQuantity function
  // This function should update the quantity of a specific item
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    }
    else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  }
  
  // TODO: Create toggleCart function
  // This function should toggle isCartOpen between true/false
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

const getTotalItems = () => {
  // TODO: Use reduce to sum all quantities
  // Hint: return cart.reduce((total, item) => total + item.quantity, 0);
  return cart.reduce((total, item) => total + item.quantity, 0);
};

  return (
    <div className="app">
<<<<<<< HEAD
      <h1>QuickCart</h1>
=======
      <Header cartItemCount={getTotalItems()} onCartClick={toggleCart}/>
      <main className="main-content">
        <ProductList products={products} onAddToCart={addToCart} />
      </main>
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} cart={cart} onUpdateQuantity={updateQuantity} onRemoveItem={removeFromCart} />
>>>>>>> d381e7f (Part 2: Add Shopping cart with state management)
    </div>
  );
}

export default App;