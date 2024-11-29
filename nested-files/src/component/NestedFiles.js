import React, { useState } from 'react';
export default function FileSystem({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isFolder = data.type === 'folder';
  function handleClick() {
    setIsExpanded(!isExpanded);
  }
  return (
    <>
      {isFolder ? (
        <div onClick={handleClick}>
          {isExpanded ? 'Open' : 'Closed'}
          {data.name}
        </div>
      ) : (
        <div>File {data.name}</div>
      )}

      {isFolder &&
        isExpanded &&
        data.children &&
        data.children.map((data, index) => (
          <FileSystem key={index} data={data} />
        ))}
    </>
  );
}
