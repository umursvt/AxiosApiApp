import React, { useState } from 'react';

function SearchHeader({ search }) {
  const [text, setText] = useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    search(text);
  };
  return (
    <div className="searchDiv">
      <form onSubmit={handleSearch}>
        <label>Ne arıyorsunuz?</label>
        <input type="search" value={text} onChange={handleText} />
      </form>
    </div>
  );
}

export default SearchHeader;
