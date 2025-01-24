import React from 'react'

import './next.css'
import { Question, questions } from '../../data/data';


type Props = {
  qIndx: number;
  setQIdx: React.Dispatch<React.SetStateAction<number>>;
  setQuestion: React.Dispatch<React.SetStateAction<Question>>;
}

const Next = ({ setQIdx, qIndx, setQuestion }: Props) => {

  const sound = new Audio('../../public/sounds/bubble2.wav')


  const handleClick = () => {
    const nextIndex = qIndx === questions.length - 1 ? 0 : qIndx + 1;
    setQIdx(nextIndex);
    // console.log(qIndx)
    setQuestion({ ...questions[nextIndex], isActive: true })
    sound.play()

  }

  return (
    <button onClick={handleClick}
      className='answer' style={{ padding: '20px 40px' }}>
      Next Bubble

    </button>

  )
}

export default Next