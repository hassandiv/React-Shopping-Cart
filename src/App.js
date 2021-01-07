import React from 'react'
import { AppProvider } from './AppContext';
import Cart from './Cart'
import './App.css'

function App() {

  return (
    <AppProvider>
      <div className="App">
        <Cart />
      </div>
    </AppProvider>
  )
}

export default App;
