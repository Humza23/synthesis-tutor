import React, { useState } from 'react';
import Visualization from './Visualization';
import '../styles.css';

const Tutorial = () => {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState('');
  const [answerFeedback, setAnswerFeedback] = useState('');
  const [selectedImageCounts, setSelectedImageCounts] = useState({ ones: 0, tens: 0 });


  const steps = [
    {
      type: 'instruction',
      tutorialContent: (
        <>
          <h1>Addition using Base-10 Blocks for 2 digit numbers</h1>
          <hr style={{ border: '1px solid #ccc', margin: '10px 0' }} />
          <p>Hi, welcome to Synthesis Tutor! Today we will learn how to add 2 digit numbers using base ten blocks.</p>
        </>
      ),
      visualizationContent: {},
    },
    {
      type: 'instruction',
      tutorialContent: (
        <>
        <p>On the right side of the screen, you'll find an interactive area known as the virtual playground. Here you will be able to work with manipulatives to help your learning.</p>
        <p>Today, we will be using base ten blocks.</p>
        </>
      ),
      visualizationContent: {},
    },
    {
      type: 'instruction',
      tutorialContent: `First, let's start by understanding place value and learning how base ten blocks can be used to help us add.`,
      visualizationContent: {},
    },
    {
      type: 'instruction',
      tutorialContent: (
        <>
        <p>To the right is a 2 digit number which contains a digit in the ones and tens place</p>
        <p style={{fontSize: '3rem'}}> ➡️ </p>
        </>
        ),
      visualizationContent: {
        content: '14',
      },
    },
    {
      type: 'interactive',
      tutorialContent: (
        <>
                <h2>Here is your first interactive lesson. In the toolbar on the right, click the base ten blocks to help you solve the answer. If you need to remove the blocks, click on the blocks you would like to remove</h2>
                <hr style={{ border: '1px solid #ccc', margin: '10px 0' }} />
        <p>The number in the ones column here is underlined and highlighted. The ones column represents individual units or ones. You can use single blocks to represent numbers from 1 to 9</p>
        <p> Try placing 4 units to demonstrate the ones in this number</p>
        <p> What number is in the ones column? </p>
        </>
        ),
      answer: '4',
      visualizationContent: {
        content: '14',
        characterToStyle: 1,
      },
    },
    {
      type: 'interactive',
      tutorialContent: (
        <>
        <h3 className='question'>How many ones are there in the number to the right?</h3>
        <p className='questionHint'>Hint: Since this is your first independent question, try clicking the units and count until you reach the number in the ones column </p>
        </>
      ),
      answer: '7',
      visualizationContent: {
        content: '17',
      },
    },

    {
      type: 'interactive',
      tutorialContent: (
        <>
        <p>The number that is underlined and highlighted is in the tens column. You can use rods to demonstrate how many sets of tens are in a number. That is the job of the tens column!</p>
        <hr style={{ border: '1px solid #ccc', margin: '10px 0' }} />
        <p> Try placing 2 rods to demonstrate the tens in this number</p>
        <p> What number is in the ones column? </p>
        </>
        ),
        answer: '2',
      visualizationContent: {
        content: '26',
        characterToStyle: 0,
      },
    },

    {
      type: 'interactive',
      tutorialContent: (
        <>
        <h2>Here is another interactive lesson. In the toolbar on the right, click the base ten blocks to help you solve the answer.</h2>
        <hr style={{ border: '1px solid #ccc', margin: '10px 0' }} />
        <h3 className='question'>How many tens are there in the number to the right?</h3>
        <p className='questionHint'> Use the rods in the virtual playground to help find the answer</p>
        </>
      ),
      answer: '3',
      visualizationContent: {
        content: '35',
      },
    },

    {
      type: 'instruction',
      tutorialContent: 'End of Demo Content',
      visualizationContent: {
        content: 'Thank You for going through this demo =]',
        characterToStyle: null,
      }
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep((prevStep) => prevStep + 1);
      setSelectedImageCounts({ ones: 0, tens: 0 });
      setAnswer(''); // Clear the answer when moving to the next step
      setAnswerFeedback('')
    }else{
      setStep(0)
    }
    console.log(step);
  };

  const handleAnswerSubmit = () => {
    if (answer.trim() === steps[step].answer) {
      console.log('Correct answer! - You may press next');
      setAnswerFeedback('Correct answer! - You may press next')
    } else if (answer.trim() === '') {
      console.log('Please provide an answer.');
      setAnswerFeedback('Please provide an answer.')
    } else {
      console.log('Incorrect answer. Try again.');
      setAnswerFeedback('Incorrect answer. Try again - You got this!')
    }
  };

  const handleTextInput = (event) => {
    setAnswer(event.target.value);
  };

  const handleInteractiveImageClick = (imageType) => {
    setSelectedImageCounts((prevCounts) => ({ ...prevCounts, [imageType]: prevCounts[imageType] + 1 }));
  };

  const handleDecrementImageClick = (imageType) => {
    setSelectedImageCounts((prevCounts) => ({
      ...prevCounts,
      [imageType]: prevCounts[imageType] - 1,
    }));
  };

  return (
    <div className="split-screen">
      <div className="text-container">
        <p>{steps[step].tutorialContent}</p>
        {steps[step].type === 'interactive' && (
        <div>
        <input
          type="text"
          value={answer}
          onChange={handleTextInput}
          placeholder="Type your answer..."
          style={{ marginTop: '10px', marginRight: '5px' }}
          />
        <button className="button" onClick={handleAnswerSubmit}>Submit</button>
        <p>{answerFeedback}</p>
        

        </div>
      )}
<button className="button" onClick={handleNext} disabled={steps[step].type === 'interactive' && answerFeedback !== 'Correct answer! - You may press next'}>
  {step === steps.length - 1 ? 'Restart Lesson' : 'Next'}
</button>

      </div>
      <div className="visualization-container">
        {steps[step].type === 'interactive' ? (
          <Visualization content={steps[step].visualizationContent.content} characterToStyle={steps[step].visualizationContent.characterToStyle} selectedImageCounts={selectedImageCounts} handleInteractiveImageClick={handleInteractiveImageClick} handleDecrementImageClick={handleDecrementImageClick}/>
        ) : (
<Visualization content={steps[step].visualizationContent.content} characterToStyle={steps[step].visualizationContent.characterToStyle}/>

          
        )}
      </div>
    </div>
  );
};

export default Tutorial;
