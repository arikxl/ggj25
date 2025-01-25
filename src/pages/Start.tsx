import React from 'react'

type Props = {
    setIsGameOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Start = ({ setIsGameOn }: Props) => {


    const coverVideo ='https://res.cloudinary.com/arikxl/video/upload/v1737801046/Ella2023/dunkl1us7nnomuxgjg3y.mp4'


    return (
        <main className="start">
            <video className="background-video" autoPlay loop muted>
                <source src={coverVideo} type="video/mp4" />
            </video>
            <section className="content">
                <p>Choose what to do with the bubbles</p>
                <button className='answer' style={{padding:'20px 40px'}}
                    onClick={() => setIsGameOn(true)}>Let's Pop</button>
            </section>
        </main>
    )
}

export default Start