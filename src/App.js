import React from 'react'
import './App.css'
import Scheduler from "./scheduler/Scheduler"

function App() {
  return (
      <div className="App">
        <div className="header">
          <h3>Live and Scheduled Content Calendar</h3>
        </div>
        <Scheduler/>
      </div
      >
  )
}

export default App
