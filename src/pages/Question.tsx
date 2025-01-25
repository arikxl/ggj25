
import { useState } from "react";
import Desc from "../components/Desc";
import Img from "../components/Img";
import Scala from "../components/Scala";
import { questions, Question as QuestionType } from '../data/data';
import AnswerList from "../components/AnswerList";
import Next from "../components/nextNtn/Next";

type Props = {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
};

const Question = ({ score, setScore }: Props) => {


    const [qIndx, setQIdx] = useState<number>(0);
    const [question, setQuestion] = useState<QuestionType>(questions[qIndx]);
    // const [score, setScore] = useState<number>(50);
    
    
    // useEffect(() => {
    //     console.log('aa',qIndx)
    //     setQuestion(questions[qIndx])
    // }, [qIndx])

    return (
        <main className="question">
            <AnswerList qIndx={qIndx } question={question} setQuestion={setQuestion} setScore={setScore} score={score} />
            <section className="flex">
                <Img src={question.src} />
                    <br />
                <div style={{ display: question.isActive ? 'none' : 'block' }}>

                    <Desc desc={question.desc}  />
                    <br />
                    <Next setQIdx={setQIdx} qIndx={qIndx} setQuestion={setQuestion } />
                </div>
            </section>
            <Scala score={score} />

        </main>
    )
}

export default Question