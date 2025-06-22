import React, { useState, useEffect } from 'react';
import './Item.css';

const ItemForm = ({ onAdd, onUpdate, editItem }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
    } else {
      setName('');
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (editItem) {
      onUpdate({ ...editItem, name });
    } else {
      onAdd({ name });
    }

    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <input
        type="text"
        placeholder="Enter item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">
        {editItem ? 'Update Item' : 'Add Item'}
      </button>
    </form>
  );
};

export default ItemForm;
