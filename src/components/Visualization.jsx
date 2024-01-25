import TaskBar from "./Taskbar";
import onesBlockImage from "../images/onesBlockImage.jpeg";
import tensBlockImage from "../images/tensBlockImage.jpeg";
import { motion } from "framer-motion";

const Visualization = ({
  content,
  characterToStyle,
  selectedImageCounts,
  handleInteractiveImageClick,
  handleDecrementImageClick,
}) => {
  return (
    <div>
      <TaskBar handleInteractiveImageClick={handleInteractiveImageClick} />
      {characterToStyle !== null ? (
        content &&
        content.split("").map((char, index) => (
          <span
            key={index}
            style={
              index === characterToStyle
                ? {
                    fontWeight: "bold",
                    textDecoration: "underline",
                    backgroundColor: "black",
                  }
                : {}
            }
          >
            {char}
          </span>
        ))
      ) : (
        <p className="visualizationTextOuput">{content}</p>
      )}
      {selectedImageCounts && (
        <div className="selected-images">
          {selectedImageCounts.tens > 0 && (
            <div className="selected-image">
              {[...Array(selectedImageCounts.tens)].map((_, index) => (
                <motion.img
                  className="visualizedBlockImg tens"
                  key={index}
                  src={tensBlockImage}
                  alt="TaskBar Image Tens"
                  onClick={() => handleDecrementImageClick("tens")}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>
          )}
          {selectedImageCounts.ones > 0 && (
            <div className="selected-image">
              {[...Array(selectedImageCounts.ones)].map((_, index) => (
                <motion.img
                  className="visualizedBlockImg ones"
                  key={index}
                  src={onesBlockImage}
                  alt="TaskBar Image Ones"
                  onClick={() => handleDecrementImageClick("ones")}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Visualization;
