import React from 'react'
import CartList from './components/CartList'
import ItemsList from './components/ItemsList'
import { CartProvider } from './context/cart-context'
import './style.css'

/*

💪 Exercise: Using Context

The fruit market now has a cart feature. All the fruits in your cart are displayed within the <CartList> component, which accesses the items in the cart via CartContext, which has been set up in src/context/cart-context.js.

CartProvider provides two values:
  - itemsInCart (an array)
  - addToCart (a function)

The "Add to cart" buttons are currently not working.

🎯 Your task:
- Explore the context setup in these three files:
  - src/App.jsx
  - src/context/cart-context.js
  - src/components/CartList.jsx
- Now look at src/components/ItemCard.jsx.
  - Make the "Add to cart" buttons function as expected.

💡 Tip:
- You only need to update the src/components/ItemCard.jsx component.
- use the useContext hook to consume CartContext so that you can access the addToCart function.


*/

export default function App() {
  return (
    <main>
      <h1>React Fruit Market</h1>
      <CartProvider>
        <CartList />
        <ItemsList />
      </CartProvider>
    </main>
  )
}
