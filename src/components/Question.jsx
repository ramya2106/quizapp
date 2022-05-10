import React, { useState } from 'react'
import Quizapi from '../quizdata/Quizapi'

const Question = () => {
    const[currentQuest,setcurrentQuest] = useState(0);
    const[showResult,setshowResult] = useState(false);
    const[score,setScore] = useState(0);
    const handleNext = (isCorrect) => {
        if(isCorrect){
            setScore(score+1)
        } else {
            setScore(score)
        }
        if(currentQuest+1 < Quizapi.length){
            setcurrentQuest(currentQuest+1)
        } else {
            setshowResult(true)
        }      
    }

    const handlerestart = () => {
        setScore(0)
        setcurrentQuest(0)
        setshowResult(false)
    }
  return (
      <div className='wrapper'>
          {showResult ? (
              <div className="final-results">
              <h1>Final Results</h1>
              <p>
                You did {score} out of {Quizapi.length} <br/>
                Total Score: {score/Quizapi.length * 100}
              </p>
              <button onClick={() => handlerestart()}>Restart game</button>
            </div>
          ): (<div className='question-card'>
              <h2 className='question-text'>{Quizapi[currentQuest].text}</h2>
              <ul>
              {
            Quizapi[currentQuest].options.map((item) => {
                return(
                    <li key={item.id} onClick={() => handleNext(item.isCorrect)}>
                    {item.text}
                    </li>
                )
            })
        }
              </ul>
        
    </div>
    )}
          
      </div>
    
  )
}

export default Question