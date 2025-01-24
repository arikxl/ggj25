
import { useState } from "react";
import Desc from "../components/Desc";
import Img from "../components/Img";
import Scala from "../components/Scala";
import { questions, Question as QuestionType } from '../data/data';
import AnswerList from "../components/AnswerList";
import Next from "../components/nextNtn/Next";



const Question = () => {


    const [qIndx, setqIdx] = useState<number>(0);
    const [question, setQuestion] = useState<QuestionType>(questions[qIndx]);
    const [score, setScore] = useState<number>(50);


    return (
        <main className="question">
            <AnswerList question={question} setQuestion={setQuestion} setScore={setScore} score={score} />
            <section>
                <Img src={question.src} />
                <div style={{ display: question.isActive ? 'none' : 'block' }}>

                    <Desc desc={question.desc}  />
                    <br />
                    <Next />
                </div>
            </section>
            <Scala score={score} />

        </main>
    )
}

export default Question