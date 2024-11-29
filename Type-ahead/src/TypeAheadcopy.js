import React, { useState, useEffect } from "react";

function TypeAheadCopy({ suggestions }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [isSearching, setIsSearching] = useState(false); // For showing loading state

  const searchBoxStyle = {
    width: "200px",
    height: "30px",
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  // Debounce utility function
  function debounce(func, delay) {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => func(...args), delay);
    };
  }

  // Debounced search/filter function
  const debouncedFilter = debounce((inputVal) => {
    if (inputVal.trim()) {
      setIsSearching(true); // Simulate a "loading" state
      const filtered = suggestions.filter((item) =>
        item.toLowerCase().includes(inputVal.toLowerCase())
      );
      setFilteredList(filtered);
      setIsSearching(false); // Stop loading
    } else {
      setFilteredList([]);
    }
  }, 300);

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);
    debouncedFilter(value); // Trigger the debounced filter
  }

  function handleFilterItemClick(item) {
    setInputValue(item); // Set input value to clicked item
    setFilteredList([]); // Clear the suggestions
  }

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
        style={searchBoxStyle}
      />
      {isSearching && <p>Loading...</p>}
      {filteredList.length > 0 && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {filteredList.map((item, index) => (
            <li
              key={index}
              onClick={() => handleFilterItemClick(item)}
              style={{
                cursor: "pointer",
                padding: "5px",
                borderBottom: "1px solid #ddd",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TypeAheadCopy;
