import { sculptureList } from './data.js';
import { useState } from 'react';

export default function Gallery() {
  const [index, setIndex] = useState(0)
  let sculpture = sculptureList[index];

  function handleClick() {
    console.log(index)
    if (sculptureList && sculptureList.length > (index + 1)) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
