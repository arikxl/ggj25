// import React from 'react'
import { useState } from 'react';
import { Answer, Question } from '../data/data'

type Props = {
    question: Question;
    answer: Answer;
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setQuestion: React.Dispatch<React.SetStateAction<Question>>;
    
}

const AnswerItem = ({ question, setQuestion, answer, setScore, score }: Props) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (!question.isActive) return
        const newScore = score + answer.score;
        setScore(newScore);
        setQuestion({ ...question, isActive: false });
        setIsClicked(true)
    }

  return (
      <button className='answer' disabled={!question.isActive}
          onClick={handleClick} style={{ backgroundColor: isClicked ? '#b03' :'#d35'}}
      >{answer.text}   </button>
  )
}

export default AnswerItem