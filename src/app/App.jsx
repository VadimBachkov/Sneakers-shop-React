import React, { createContext, useState } from "react";

import { BrowserRouter } from 'react-router-dom'

import { Layout } from './Layout'
import Router from './Router'

export const Store = createContext();

function App() {
  const [store, setStore] = useState({
    user: {
      name: '',
      email: '',
      phone: '',
      password: '',
      shoppingCart: []
    }
  });

  return (
    <BrowserRouter>
      <Store.Provider value={[store, setStore]}>
        <Layout />
        <Router />
      </Store.Provider>
    </BrowserRouter>
  )
}

export default App
