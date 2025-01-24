// import React from 'react'

type Props = {
    score:number
}

const Scala = ({ score }: Props) => {


    return (
        <>
            <div className="scala-wrapper">
                <div className="scala-inner" style={{height: `${score}%`}}>
                <h2>
                    {score}
                </h2>
                </div>
            </div>
        </>
    )
}

export default Scala