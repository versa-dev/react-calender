import React, {Component} from 'react';
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";

class Scheduler extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timeHeaders: [{"groupBy": "Day", "format": "MM/dd"}],
      scale: "Day",
      days: 30,
      startDate: DayPilot.Date.today(),
    };
  }

  componentDidMount() {

    this.scheduler.scrollTo("2020-11-01");

    // load resource and event data
    this.setState({
      resources: [
        {name: "1", id: "A"},
        {name: "2", id: "B"},
        {name: "3", id: "C"},
      ],
      events: [
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
          barColor: "#38761d",
          barBackColor: "#93c47d"
        },
        {
          id: 3,
          text: "Event 3",
          start: "2020-11-07T00:00:00",
          end: "2020-11-18T00:00:00",
          resource: "C",
          barColor: "#f1c232",
          barBackColor: "#f1c232"
        },
        {
          id: 4,
          text: "Event 3",
          start: "2020-11-20T00:00:00",
          end: "2020-11-26T00:00:00",
          resource: "B",
          barColor: "#cc0000",
          barBackColor: "#ea9999"
        }
      ]
    });

  }

  render() {
    var {...config} = this.state;
    return (
      <div>
        <DayPilotScheduler
          {...config}
          ref={component => {
            this.scheduler = component && component.control;
          }}
        />
      </div>
    );
  }
}

export default Scheduler;
