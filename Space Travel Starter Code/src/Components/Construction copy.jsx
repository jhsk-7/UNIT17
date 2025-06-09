import { useState, useEffect } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import Construction from "./Construction.css";

function Construction() {
  const initialState = {
    name: "",
    capacity: "",
    description: "",
    pictureUrl: "",
  };

  const [newSpacecraft, setNewSpacecraft] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setNewSpacecraft((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value, 10) : value,
    }));

    // Clear individual field error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newSpacecraft.name.trim()) newErrors.name = "Name is required";
    if (!newSpacecraft.capacity) newErrors.capacity = "Capacity is required";
    if (!newSpacecraft.description.trim())
      newErrors.description = "Description is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      // No errors → submit form
      await SpaceTravelApi.buildSpacecraft(newSpacecraft);
      // Reset form
      setNewSpacecraft(initialState);
      setErrors({});
    } catch (err) {
      console.error("Error building spacecraft:", err);
    }
  };

  const inputStyle = (field) => ({
    border: errors[field] ? "2px solid red" : "1px solid #ccc",
    padding: "5px",
    marginBottom: "5px",
    display: "block",
  });

  return (
    <>
      <p>If you build it ...</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          value={newSpacecraft.name}
          style={inputStyle("name")}
        />

        <label htmlFor="capacity">Capacity</label>
        <input
          id="capacity"
          type="number"
          name="capacity"
          onChange={handleChange}
          placeholder="Capacity"
          value={newSpacecraft.capacity}
          style={inputStyle("capacity")}
        />

        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="Description"
          value={newSpacecraft.description}
          style={inputStyle("description")}
        />

        <label htmlFor="pictureUrl">Picture URL</label>
        <input
          id="pictureUrl"
          type="text"
          name="pictureUrl"
          onChange={handleChange}
          placeholder="Picture Url"
          value={newSpacecraft.pictureUrl}
          style={inputStyle("pictureUrl")}
        />

        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        {errors.capacity && <p style={{ color: "red" }}>{errors.capacity}</p>}
        {errors.description && (
          <p style={{ color: "red" }}>{errors.description}</p>
        )}

        <button type="submit">Build</button>
      </form>
    </>
  );
}

export default Construction;
