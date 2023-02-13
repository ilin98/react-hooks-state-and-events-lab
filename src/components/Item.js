import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(true);
  function handleCartClick () {
    setCart(!cart)
  }
  const liClass = cart === true ? "" : "in-cart"
  const cartStatus = cart === true ? "Add to Cart" : "Remove From Cart"


  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartClick}>{cartStatus}</button>
    </li>
  );
}

export default Item;
