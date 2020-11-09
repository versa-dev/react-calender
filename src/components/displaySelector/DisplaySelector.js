import React from 'react';

const DisplaySelector = ({ setDayNum }) => {

  const onSelect = (e) => {
    setDayNum(Number(e.target.value))
  }

  return (
    <div>
      <select className="browser-default custom-select" onChange={onSelect}>
        <option value="60">Next 60 days</option>
        <option value="30" selected="selected">Next 30 days</option>
        <option value="20">Next 20 days</option>
        <option value="15">Next 15 days</option>
      </select>
    </div>
  );
}

export default DisplaySelector