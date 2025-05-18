import React, { useReducer } from "react";
import "./ItemForm.css";

// Initial state for the input fields.
const INITIAL_DATA_STATE = {
  name: "", // name of the inventory item
  quantity: "", // quantity
  purpose: "", // reason item included
  terms: false, // must agree to terms
};

// validates if the fields were entered.
// when fields are not "", the entries are valid.
const INITIAL_VALID_STATE = {
  name: "",
  quantity: "",
  purpose: "",
  terms: "",
};

// Update data fields with user input
function dataReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return INITIAL_DATA_STATE;
    default:
      return state;
  }
}

// update validation based on user input
function validateReducer(state, action) {
  switch (action.type) {
    case "UPDATE_COLOR":
      return {
        ...state,
        [action.field]:
          action.value === "" || action.value === false ? "red" : "",
      };
    case "RESET":
      return INITIAL_VALID_STATE;
    default:
      return state;
  }
}

function ItemForm({ addItem }) {
  const [formData, dataDispatch] = useReducer(dataReducer, INITIAL_DATA_STATE);
  const [formValidate, validateDispatch] = useReducer(
    validateReducer,
    INITIAL_VALID_STATE
  );

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    dataDispatch({
      type: "UPDATE_FIELD",
      field: name,
      value: newValue,
    });

    validateDispatch({
      type: "UPDATE_COLOR",
      field: name,
      value: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    Object.entries(formData).forEach(([field, value]) => {
      validateDispatch({
        type: "UPDATE_COLOR",
        field,
        value,
      });
    });

    // Check if all fields are valid
    const hasError = Object.values(formData).some(
      (val) => val === "" || val === false
    );
    if (hasError) {
      //  alert("Please complete all fields and agree to the terms.");
      return;
    }

    addItem({ ...formData });
    dataDispatch({ type: "RESET" });
    validateDispatch({ type: "RESET" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="formInputEl" style={{ borderColor: formValidate.name }}>
          <input
            className="input"
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div
          className="formInputEl"
          style={{ borderColor: formValidate.quantity }}
        >
          <input
            className="input"
            id="quantity"
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div
          className="formInputEl"
          style={{ borderColor: formValidate.purpose }}
        >
          <input
            className="input"
            id="purpose"
            type="text"
            name="purpose"
            placeholder="Purpose"
            value={formData.purpose}
            onChange={handleChange}
          />
        </div>
        <div
          className="formInputEl"
          style={{ borderColor: formValidate.terms, color: "white" }}
        >
          <label>
            <input
              id="termsCheckbox"
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            Agree to Terms
          </label>
        </div>
        <button type="submit" className="submitBtn">
          Add
        </button>
      </form>
    </div>
  );
}

export default ItemForm;
