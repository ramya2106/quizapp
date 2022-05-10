import './App.css';
import Main from './components/Main'
import Question from './components/Question';
import { useState } from 'react';

function App() {
  const [start, setStart] = useState(false);
  return (
   <div>

     { start ? <Question /> : <Main props={setStart} />} 
   </div>
  );
}

export default App;
