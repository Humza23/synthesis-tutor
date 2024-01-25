import React, {useState} from 'react';
import TaskBar from './Taskbar';

const Visualization = ({ content, characterToStyle, selectedImageCounts, handleInteractiveImageClick  }) => {


  return (
    <div>
      <TaskBar handleInteractiveImageClick={handleInteractiveImageClick}/>
      {content && content.split('').map((char, index) => (
        <span key={index} style={index === characterToStyle ? { fontWeight: 'bold', textDecoration: 'underline', backgroundColor: 'black' } : {}}>
          {char}
        </span>
      ))}
      {selectedImageCounts && 
<div className="selected-images">
        {selectedImageCounts.ones > 0 && (
          <div className="selected-image">
            {[...Array(selectedImageCounts.ones)].map((_, index) => (
              <img className="visualizedBlockImg" key={index} src="https://www.clipartmax.com/png/small/15-153859_cube-clipart-ten-base-base-ten-blocks.png" alt="TaskBar Image Tens" />
              ))}
          </div>
        )}
        {selectedImageCounts.tens > 0 && (
          <div className="selected-image">
            {[...Array(selectedImageCounts.tens)].map((_, index) => (
              <img className="visualizedBlockImg" key={index} src="https://www.clipartmax.com/png/small/15-153859_cube-clipart-ten-base-base-ten-blocks.png" alt="TaskBar Image Tens" />
              ))}
          </div>
        )}
      </div>
      }

    </div>
  );
};


export default Visualization;