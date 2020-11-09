import React from 'react';

const DisplaySelector = () => {

  const onSelect = (e) => {
    localStorage.setItem('num', Number(e.target.value))
  }

  return (
    <div>
      <select className="browser-default custom-select" onChange={onSelect}>
        <option value="60">Next 60 days</option>
        <option value="30" selected="selected">Next 30 days</option>
        <option value="15">Next 15 days</option>
        <option value="10">Next 10 days</option>
      </select>
    </div>
  );
}

export default DisplaySelector