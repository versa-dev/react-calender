import React, { useEffect, useState } from 'react'
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react"
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

  const events = {events: [
    {
      id: 1,
      text: "Event 1",
      start: "2020-11-01T00:00:00",
      end: "2020-11-15T00:00:00",
      resource: "A"
    },
    {
      id: 2,
      text: "Event 2",
      start: "2020-11-13T00:00:00",
      end: "2020-11-19T00:00:00",
      resource: "B",
    },
    {
      id: 3,
      text: "Event 3",
      start: "2020-11-07T00:00:00",
      end: "2020-11-18T00:00:00",
      resource: "C",
    },
    {
      id: 4,
      text: "Event 3",
      start: "2020-11-20T00:00:00",
      end: "2020-11-26T00:00:00",
      resource: "B",
    }
  ]}

  

  useEffect(() => {

    // this.Scheduler.scrollTo(DayPilot.Date.today());
    // document.getElementsByClassName("scheduler_default_main")[0].scrollTo(DayPilot.Date.today());

    let temp = {...config, ...events}
    console.log(temp)
    setConfig(temp)


    // load resource and event data
     
  }, [])

  return (
    <div>
      <DayPilotScheduler
        {...config}
        // ref={component => {
        //   this.scheduler = component && component.control;
        // }}
      />
    </div>
  );
}

export default Scheduler
