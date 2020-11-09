import React from "react";

interface DisplayselectorProps {
  setDayNum: Function;
}

const DisplaySelector = (props: DisplayselectorProps) => {
  const { setDayNum } = props;

  const onSelect = (e: any) => {
    setDayNum(Number(e.target.value));
  };

  return (
    <div>
      <select className="browser-default custom-select" onChange={onSelect}>
        <option value="60">Next 60 days</option>
        <option value="30" selected>
          Next 30 days
        </option>
        <option value="20">Next 20 days</option>
        <option value="15">Next 15 days</option>
      </select>
    </div>
  );
};

export default DisplaySelector;
