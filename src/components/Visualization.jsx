import React from 'react';

const Visualization = ({ content, characterToStyle }) => {
  return (
    <div>
      {content && content.split('').map((char, index) => (
        <span key={index} style={index === characterToStyle ? { fontWeight: 'bold', textDecoration: 'underline', backgroundColor: 'black' } : {}}>
          {char}
        </span>
      ))}
    </div>
  );
};


export default Visualization;