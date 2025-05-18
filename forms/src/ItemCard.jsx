import React from "react";

const ItemCard = ({ name, quantity, purpose }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>quantity: {quantity}</p>
      <p>purpose: {purpose}</p>
    </div>
  );
};

export default ItemCard;
