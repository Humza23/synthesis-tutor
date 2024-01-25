import React, { useState } from 'react';
import Visualization from './Visualization';
import '../styles.css';

const Tutorial = () => {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState('');
  const [answerFeedback, setAnswerFeedback] = useState('');


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
      tutorialContent: `On the right side of the screen, you'll find an interactive area to play with virtual base ten blocks.`,
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
      type: 'instruction',
      tutorialContent: 'Highlighted is the digit in the ones column. The ones column represents individual units or ones. You can use single blocks to represent numbers from 1 to 9',
      visualizationContent: {
        content: '14',
        characterToStyle: 1,
      },
    },
    {
      type: 'interactive',
      tutorialContent: 'How many ones are there in the number to the right?',
      answer: '7',
      visualizationContent: {
        content: '17',
      },
    },
    {
      type: 'instruction',
      tutorialContent: 'Tutorial Content for Step 2',
      visualizationContent: 'Visualization Area - Step 2 (Tens)',
    },
    // Add more steps as needed
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep((prevStep) => prevStep + 1);
      setAnswer(''); // Clear the answer when moving to the next step
    }else{
      setStep(0)
    }
    console.log(step);
  };

  const handleInteractiveClick = () => {
    if (answer.trim() === steps[step].answer) {
      console.log('Correct answer! - You may press next');
      setAnswerFeedback('Correct answer')
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
        <button className="button" onClick={handleInteractiveClick}>Submit</button>
        <p>{answerFeedback}</p>
        

        </div>
      )}
<button className="button" onClick={handleNext} disabled={steps[step].type === 'interactive' && answerFeedback !== 'Correct answer'}>
  {step === steps.length - 1 ? 'Restart Lesson' : 'Next'}
</button>

      </div>
      <div className="visualization-container">
        {steps[step].type === 'interactive' ? (
          <Visualization content={steps[step].visualizationContent.content} characterToStyle={steps[step].visualizationContent.characterToStyle} 
          onElementClick={handleInteractiveClick} />
        ) : (
<Visualization content={steps[step].visualizationContent.content} characterToStyle={steps[step].visualizationContent.characterToStyle}/>

          
        )}
      </div>
    </div>
  );
};

export default Tutorial;
