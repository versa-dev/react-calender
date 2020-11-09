import React from 'react'
import Scheduler from './components/scheduler/Scheduler'
import DisplaySelector from './components/displaySelector/DisplaySelector'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="header">
        <h3>Live and Scheduled Content Calendar</h3>
        <DisplaySelector />
      </div>
      <Scheduler/>
    </div>
  )
}

export default App
