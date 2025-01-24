import React from 'react'
import { Question } from "../data/data";
import AnswerItem from './AnswerItem';


type Props = {
    question: Question
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setQuestion: React.Dispatch<React.SetStateAction<Question>>;
    qIndx: number;
};

const AnswerList = ({ qIndx, question, setQuestion, setScore, score }: Props) => {
    return (
        <section className='answerList'>
            {question.answers.map((answer, idx) => (
                <AnswerItem key={idx} question={question}
                    setQuestion={setQuestion} answer={answer}
                    setScore={setScore} score={score} qIndx={qIndx } />
            ))}
        </section>
    )
}

export default AnswerList