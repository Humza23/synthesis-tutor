import React, {useState} from 'react';
import TaskBar from './Taskbar';
import onesBlockImage from '../images/onesBlockImage.jpeg'
import tensBlockImage from '../images/tensBlockImage.jpeg'

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
        {selectedImageCounts.tens > 0 && (
          <div className="selected-image">
            {[...Array(selectedImageCounts.tens)].map((_, index) => (
              <img className="visualizedBlockImg tens" key={index} src={tensBlockImage} alt="TaskBar Image Tens" />
              ))}
          </div>
        )}
        {selectedImageCounts.ones > 0 && (
          <div className="selected-image">
            {[...Array(selectedImageCounts.ones)].map((_, index) => (
              <img className="visualizedBlockImg ones" key={index} src={onesBlockImage} alt="TaskBar Image Ones" />
              ))}
          </div>
        )}
      </div>
      }

    </div>
  );
};


export default Visualization;