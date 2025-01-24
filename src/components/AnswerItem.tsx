// import React from 'react'
import { useEffect, useState } from 'react';
import { Answer, Question } from '../data/data'

type Props = {
    question: Question;
    answer: Answer;
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setQuestion: React.Dispatch<React.SetStateAction<Question>>;
    qIndx:number
}

const AnswerItem = ({ qIndx, question, setQuestion, answer, setScore, score }: Props) => {

    const [isClicked, setIsClicked] = useState(false);
    const sound = new Audio('../../public/sounds/bubble1.wav')

    useEffect(() => {
        setIsClicked(false);
        console.log('Question index changed:', qIndx);
    }, [qIndx]);

    const handleClick = () => {
        if (!question.isActive || isClicked) return
        const newScore = score + answer.score;
        setScore(newScore);
        setQuestion({ ...question, isActive: false });
        setIsClicked(true)
        sound.play()
    }

    return (
        <button className={`answer ${isClicked ? 'clicked' : ''}`}
            disabled={!question.isActive} onClick={handleClick} 
      >{answer.text}   </button>
  )
}

export default AnswerItem