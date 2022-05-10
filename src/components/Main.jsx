import React from 'react'

const Main = ({props}) => {
    const startquiz = () =>{
        props(true)
    }
  return (
    <div className='main'>
        <h2>Take the quiz</h2>
        <h4>Whenever, you want</h4>
        <button className='btn' onClick={startquiz}>Start</button>
    </div>
  )
}

export default Main