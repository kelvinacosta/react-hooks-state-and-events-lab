import React,{useState} from "react";

function Item({ name, category }) {
  
  const [isInCart, setIsInCart] = useState("")

  const appCart = isInCart ? "in-cart" : ""
  const colorCart = isInCart ? "remove" : "add"
  const changeTextContext = isInCart ? "Remove From Cart": "Add to Cart"

  const handleClickCart = () => {
    setIsInCart(!isInCart)
  }
  
  return (
    <li className={appCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={colorCart} onClick={handleClickCart}>{changeTextContext}</button>
    </li>
  );
}

export default Item;
