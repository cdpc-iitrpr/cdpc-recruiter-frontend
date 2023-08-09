import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import JAF from './pages/JAF';
import Email from './pages/Email';
import JobProfile from './components/JobProfile';
import Signup from './pages/Signup';
import InfForm from './pages/OrganisationDetails';

import OrganisationDetails from './pages/OrganisationDetails';
import InfJobDetails from './pages/InfJobDetails';
import SPOCInterface from './pages/SPOCInterface';
import SelectionProcess from './components/Form/SelectionProcess';

function App() {

  return (
    <>
      <div className="App">
        <Header />
        {/* <Landing /> */}
        {/* <Email /> */}
        {/* <JobProfile /> */}
        {/* <SPOCInterface /> */}
        {/* <Signup /> */}
        {/* <InfForm /> */}
        {/* <InfJobDetails /> */}
        <SelectionProcess />
      </div>
    </>
  )
}

export default App
