import React from 'react';
import ItemList from './components/ItemList';
import './components/Item.css';

function App() {
  return (
    <div className="container">
      <h1>Simple CRUD App</h1>
      <ItemList />
    </div>
  );
}

export default App;
