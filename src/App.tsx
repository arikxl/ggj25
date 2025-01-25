
import { useState } from 'react';
import './App.css'
import Question from './pages/Question';
import Start from './pages/Start';


function App() {

  const [isGameOn, setIsGameOn] = useState(false);
  const [score, setScore] = useState<number>(50);




  return (
    <>

      {
        !isGameOn
          ? <Start setIsGameOn={setIsGameOn} />
          : <Question score={score} setScore={setScore} />
      }






    </>
  )
}

export default App
