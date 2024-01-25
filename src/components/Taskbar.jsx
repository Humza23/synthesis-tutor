import onesBlockImage from "../images/onesBlockImage.jpeg";
import tensBlockImage from "../images/tensBlockImage.jpeg";

const TaskBar = ({ handleInteractiveImageClick }) => {
  return (
    <div className="task-bar">
      <div
        className="task-bar-image"
        onClick={() => handleInteractiveImageClick("ones")}
      >
        <img src={onesBlockImage} alt="TaskBar Image Ones" />
      </div>
      <div
        className="task-bar-image"
        onClick={() => handleInteractiveImageClick("tens")}
      >
        <img src={tensBlockImage} alt="TaskBar Image Tens" />
      </div>
    </div>
  );
};

export default TaskBar;
