import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import FoodList from './Food/FoodList';

function App() {
  return (
    <div className="App">
      <Header title="Full Stack ASP.NET" />
      <FoodList />
    </div>
  );
}

export default App;
