// import React from 'react'

import Desc from "../components/Desc";
import Img from "../components/Img";
import Scala from "../components/Scala";

type Props = {
    question: {
        src: string;
        answers: []
        // answer1: { text: string; score: number };
        // answer2: { text: string; score: number };
        // answer3: { text: string; score: number };
        desc: string;
    };
    score:number
};

const Question = ({ question, score }: Props) => {

    console.log(question)


    return (
        <main className="question">
            <div>sss</div>
            <section>
                <Img src={question.src} />
                <Desc desc={question.desc} />
            </section>
            <Scala score={score} />

        </main>
    )
}

export default Question