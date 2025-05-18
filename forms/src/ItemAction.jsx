import React, { useContext } from "react";
import "./ItemAction.css";
import DeleteContext from "./DeleteContext";

const ItemAction = ({ id }) => {
  const deleteItem = useContext(DeleteContext);

  // Pass the item ID to the delete button. If clicked,
  // find the ID in the items array and remove it from the array.
  const handleClick = (e) => {
    const removeItemId = e.target.id;
    deleteItem(removeItemId);
  };

  return (
    <button onClick={handleClick} id={id} className="deleteItemBtn">
      Delete
    </button>
  );
};

export default ItemAction;
