import React from 'react'

export default function ItemCard({ id, symbol, name, price }) {
  function handleAddToCart() {
    addToCart(id) // this funtion needs to be accessed via context!
  }

  return (
    <div className="item-card">
      <div className="symbol">{symbol}</div>
      <h3>{name}</h3>
      <p>£{price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}
