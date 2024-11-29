import React, { useState } from "react";

const TypeAhead = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState(""); // To track input value
  const [filteredSuggestions, setFilteredSuggestions] = useState([]); // Filtered suggestions
  const [highlightIndex, setHighlightIndex] = useState(-1); // For keyboard navigation

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on input
    if (value.trim()) {
      const matches = suggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(matches);
      setHighlightIndex(-1); // Reset highlight index
    } else {
      setFilteredSuggestions([]); // Clear suggestions if input is empty
    }
  };

//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowDown") {
//       setHighlightIndex((prevIndex) =>
//         Math.min(prevIndex + 1, filteredSuggestions.length - 1)
//       );
//     } else if (e.key === "ArrowUp") {
//       setHighlightIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//     } else if (e.key === "Enter" && highlightIndex >= 0) {
//       setInputValue(filteredSuggestions[highlightIndex]);
//       setFilteredSuggestions([]);
//     }
//   };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
  };

  const renderHighlightedText = (text) => {
    const matchIndex = text.toLowerCase().indexOf(inputValue.toLowerCase());
    if (matchIndex === -1) return text;
    const beforeMatch = text.slice(0, matchIndex);
    const matchText = text.slice(matchIndex, matchIndex + inputValue.length);
    const afterMatch = text.slice(matchIndex + inputValue.length);
    return (
      <>
        {beforeMatch}
        <strong>{matchText}</strong>
        {afterMatch}
      </>
    );
  };
//   onKeyDown={handleKeyDown}
  return (
    <div style={{ width: "300px", margin: "0 auto", position: "relative" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        
        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        placeholder="Type to search..."
      />
      {filteredSuggestions.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            position: "absolute",
            width: "100%",
            maxHeight: "150px",
            overflowY: "auto",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            zIndex: 1,
          }}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: "8px",
                cursor: "pointer",
                backgroundColor: highlightIndex === index ? "#eee" : "#fff",
              }}
            >
              {renderHighlightedText(suggestion)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TypeAhead;

// Example usage
