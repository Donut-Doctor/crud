import React, { useState, useEffect } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const fetchItems = async () => {
    const res = await fetch("http://localhost:3005/api/items");
    const data = await res.json();
    setItems(data);
  };

  const addItem = async () => {
    await fetch("http://localhost:3005/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newItem }),
    });
    setNewItem("");
    fetchItems();
  };

  const deleteItem = async (id) => {
    await fetch(`http://localhost:3005/api/items/${id}`, {
      method: "DELETE",
    });
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} <button onClick={() => deleteItem(item._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
