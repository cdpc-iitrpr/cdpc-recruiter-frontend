import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import Email from './pages/Email';
import Signup from './pages/Signup';

function App() {

  return (
    <>
      <div className="App">
        {/* <Header /> */}
        {/* <Landing /> */}
        <Signup />
      </div>
    </>
  )
}

export default App
