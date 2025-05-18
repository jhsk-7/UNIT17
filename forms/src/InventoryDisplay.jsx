import React from "react";
import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";
import "./InventoryDisplay.css";

const InventoryDisplay = ({ items }) => {
  return (
    <div>
      {items.map(({ name, quantity, purpose, id }, idx) => {
        return (
          <div key={id} className="inventoryListContainer">
            <div className="inventoryItem">
              <ItemCard
                name={name}
                quantity={quantity}
                purpose={purpose}
                id={id}
              />
              <div className="deleteItemContainer">
                <ItemAction id={id} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InventoryDisplay;
