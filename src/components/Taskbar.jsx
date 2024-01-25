import React from 'react';

const TaskBar = ({ handleInteractiveImageClick }) => {
  return (
    <div className="task-bar">
      <div className="task-bar-image" onClick={() => handleInteractiveImageClick('ones')}>
        <img src="https://www.clipartmax.com/png/small/15-153859_cube-clipart-ten-base-base-ten-blocks.png" alt="TaskBar Image Ones" />
      </div>
      <div className="task-bar-image" onClick={() => handleInteractiveImageClick('tens')}>
        <img src="https://www.clipartmax.com/png/small/15-153859_cube-clipart-ten-base-base-ten-blocks.png" alt="TaskBar Image Tens" />
      </div>
    </div>
  );
};

export default TaskBar;
