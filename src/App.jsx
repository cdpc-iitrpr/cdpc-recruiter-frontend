import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import Email from './pages/Email';

function App() {

  return (
    <>
      <div className="App">
        {/* <Header /> */}
        {/* <Landing /> */}
        <Email />
      </div>
    </>
  )
}

export default App
