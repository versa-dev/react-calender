import React, { useEffect, useRef, useState } from 'react'
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react"
import events from '../data/events'
import './Scheduler.css'

function Scheduler () {

  const [config, setConfig] = useState({
    timeHeaders: [{"groupBy": "Day", "format": "ddd, MM/d"}],
    scale: "Day",
    days: 30 + DayPilot.Date.today().getDay(),
    cellWidth: 70,
    rowHeaderWidthAutoFit: false,
    startDate: DayPilot.Date.today().firstDayOfMonth(),
    timeRangeSelectedHandling: "Disabled",
    eventMoveHandling: "Disabled",
    eventResizeHandling: "Disabled",
    eventDeleteHandling: "Disabled",
    eventClickHandling: "Disabled",
    eventRightClickHandling: "Disabled",
    rowHeaderColumns: [
      { text: 'Slot #', display: "name" },
    ],
    resources: [
      {name: "1", id: "A"},
      {name: "2", id: "B"},
      {name: "3", id: "C"},
    ],
  })

  const dayRef = useRef(null);

  useEffect(() => {

    // Scroll to today in the calender
    if (dayRef.current) {
      dayRef.current.control.scrollTo(DayPilot.Date.today())
    }

    // load resource and event data
    let new_events = {events: []}
    events.events.map(item => {
      let date_1 = new Date(item.start)
      let date_2 = DayPilot.Date.today().toDateLocal()

      if (date_1.getTime() > date_2.getTime()) {
        item.backColor = "#e9a81e"
      }
      new_events.events.push(item)
    })
    let temp = {...config, ...new_events}
    setConfig(temp)

  }, [dayRef])


  return (
    <div>
      <DayPilotScheduler
        {...config}
        ref={ref => dayRef.current = ref}
      />
    </div>
  );
}

export default Scheduler
