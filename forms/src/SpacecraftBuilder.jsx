import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";
import DeleteContext from "./DeleteContext";

function SpacecraftBuilder() {
  const INITIAL_STATE = [];

  const [items, setItems] = useState(INITIAL_STATE);

  // add an item.
  function addItem(newItem) {
    setItems((items) => [...items, { ...newItem, id: uuid() }]);
  }

  // function to delete an item when delete button clicked.
  function deleteItem(removeItemId) {
    setItems((items) => items.filter((item) => item.id !== removeItemId));
  }

  console.log(items);

  return (
    <>
      <DeleteContext.Provider value={deleteItem}>
        <h1>Spacecraft Builder</h1>
        <h2>Add an Item to the Inventory</h2>
        <ItemForm addItem={addItem} />
        <h2>Inventory</h2>
        <InventoryDisplay items={items} />
      </DeleteContext.Provider>
    </>
  );
}

export default SpacecraftBuilder;
