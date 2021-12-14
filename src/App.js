import './App.css';
import React from 'react';
import Header from './components/header'
import Featured from './components/featured';
import List from './components/list';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Featured />
        <List />
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
