// import React from 'react'

type Props = {
    score: number
}

const Scala = ({ score }: Props) => {


    return (
        <>
            <section className="scala-wrapper">
                <div className="scala-inner" style={{ height: `${score}%` }}>


                    <div className="button">

                        <div className="points_wrapper">
                            <i className="point"></i>
                            <i className="point"></i>
                            <i className="point"></i>
                            <i className="point"></i>
                            <i className="point"></i>
                            <i className="point"></i>
                            <i className="point"></i>
                            <i className="point"></i>
                            <i className="point"></i>
                            <i className="point"></i>
                            <i className="point"></i>
                            <i className="point"></i>
                            <i className="point"></i>
                        </div>

                        <h2 className="inner">
                            {score}
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Scala