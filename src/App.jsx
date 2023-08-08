import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import JAF from './pages/JAF';
import Email from './pages/Email';
import JobProfile from './components/JobProfile';
import Signup from './pages/Signup';


function App() {

  return (
    <>
      <div className="App">
        <Header />
        {/* <Landing /> */}
        {/* <Email /> */}
        <JobProfile />
        <Signup />
      </div>
    </>
  )
}

export default App
