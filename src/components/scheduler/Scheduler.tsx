import React, { useEffect, useState } from "react";
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
import events, { EventElement } from "../../data/events";
import "./Scheduler.css";

interface SchedulerProps {
  dayNum: number;
}

export interface New_events {
  events: EventElement[];
  days: number;
}

const Scheduler = (props: SchedulerProps) => {
  const { dayNum } = props;

  const [config, setConfig] = useState<any>({
    timeHeaders: [{ groupBy: "Day", format: "ddd, MM/d" }],
    scale: "Day",
    cellWidth: 130,
    rowHeaderWidthAutoFit: false,
    rowHeaderColumnDefaultWidth: 40,
    startDate: DayPilot.Date.today(),
    timeRangeSelectedHandling: "Disabled",
    eventMoveHandling: "Disabled",
    eventResizeHandling: "Disabled",
    eventDeleteHandling: "Disabled",
    eventClickHandling: "Disabled",
    eventRightClickHandling: "Disabled",
    rowHeaderColumns: [{ text: "Slot #", display: "name" }],
    resources: [
      { name: "1", id: "A" },
      { name: "2", id: "B" },
      { name: "3", id: "C" },
    ],
  });

  useEffect(() => {
    // load resource and event data
    let new_events: New_events = {
      events: [],
      days: dayNum,
    };
    events.events.map((item: EventElement) => {
      let date_1 = new Date(item.start);
      let date_2 = DayPilot.Date.today().toDateLocal();

      if (date_1.getTime() > date_2.getTime()) {
        item.backColor = "#e9a81e";
      }
      new_events.events.push(item);
    });

    let temp = { ...config, ...new_events };
    setConfig(temp);
  }, [config, dayNum]);

  return (
    <div>
      <DayPilotScheduler {...config} />
    </div>
  );
};

export default Scheduler;
