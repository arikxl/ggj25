
import { useState } from 'react';
import './App.css'
import Question from './pages/Question';
import Start from './pages/Start';
import Lose from './pages/Lose';
import Win from './pages/Win';


function App() {

  const [isGameOn, setIsGameOn] = useState(false);
  const [score, setScore] = useState<number>(50);




  return (
    <>

      {
        !isGameOn
          ? <Start setIsGameOn={setIsGameOn} />
          : score < 1
            ? <Lose setScore={setScore} />
            : score > 99
              ? <Win setScore={setScore} />
              : <Question score={score} setScore={setScore} />
      }






    </>
  )
}

export default App
