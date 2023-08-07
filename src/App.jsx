import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import JAF from './pages/JAF';

function App() {

  return (
    <>
      <div className="App">
        <Header />
        <Landing />
      </div>
    </>
  )
}

export default App
