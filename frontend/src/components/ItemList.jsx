import React, { useState, useEffect } from 'react';
import './Item.css';
import axios from 'axios';
import ItemForm from './ItemForm';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:3005/api/items');
      setItems(res.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async (item) => {
    try {
      await axios.post('http://localhost:3005/api/items', item);
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3005/api/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const updateItem = async (updatedItem) => {
    try {
      await axios.put(`http://localhost:3005/api/items/${updatedItem._id}`, updatedItem);
      setEditItem(null);
      fetchItems();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div className="item-container">
      <ItemForm onAdd={addItem} onUpdate={updateItem} editItem={editItem} />
      {items.map((item) => (
        <div key={item._id} className="item">
          <span>{item.name}</span>
          <div className="actions">
            <button onClick={() => setEditItem(item)}>Edit</button>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
