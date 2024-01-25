import React from 'react';
import TaskBar from './Taskbar';
import onesBlockImage from '../images/onesBlockImage.jpeg'
import tensBlockImage from '../images/tensBlockImage.jpeg'

const Visualization = ({ content, characterToStyle, selectedImageCounts, handleInteractiveImageClick, handleDecrementImageClick  }) => {


  return (
    <div>
      {console.log('Content:', content)}
      <TaskBar handleInteractiveImageClick={handleInteractiveImageClick}/>
      {characterToStyle !== null ? (
  content && content.split('').map((char, index) => (
    <span key={index} style={index === characterToStyle ? { fontWeight: 'bold', textDecoration: 'underline', backgroundColor: 'black' } : {}}>
      {char}
    </span>
  ))
) : (
  <p className='visualizationTextOuput'>{content}</p>
)}
      {selectedImageCounts && 
<div className="selected-images">
        {selectedImageCounts.tens > 0 && (
          <div className="selected-image">
            {[...Array(selectedImageCounts.tens)].map((_, index) => (
              <img className="visualizedBlockImg tens" key={index} src={tensBlockImage} alt="TaskBar Image Tens" onClick={() => handleDecrementImageClick('tens')}/>
              ))}
          </div>
        )}
        {selectedImageCounts.ones > 0 && (
          <div className="selected-image">
            {[...Array(selectedImageCounts.ones)].map((_, index) => (
              <img className="visualizedBlockImg ones" key={index} src={onesBlockImage} alt="TaskBar Image Ones" onClick={() => handleDecrementImageClick('ones')} />
              ))}
          </div>
        )}
      </div>
      }

    </div>
  );
};


export default Visualization;