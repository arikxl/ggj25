import { useState } from 'react'

import './App.css'
import Question from './pages/Question';

import {questions} from './data/data.js'

function App() {

  
  const [question, setQuestion] = useState(questions[0])
  const [score, setScore] = useState(50)
  

  return (
    <>
      <Question question={question} score={score} />
    </>
  )
}

export default App
