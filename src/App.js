import React, { useState } from 'react'
import Scheduler from './components/scheduler/Scheduler'
import DisplaySelector from './components/displaySelector/DisplaySelector'
import './App.css'

function App() {

  const [dayNum, setDayNum] = useState(30)

  return (
    <div className="App">
      <div className="header">
        <h3>Live and Scheduled Content Calendar</h3>
        <DisplaySelector setDayNum={setDayNum} />
      </div>
      <Scheduler dayNum={dayNum} />
    </div>
  )
}

export default App
