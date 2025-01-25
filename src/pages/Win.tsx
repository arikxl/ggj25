import React from 'react'

type Props = {
    setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Win = ({ setScore }: Props) => {
    const coverVideo = 'https://res.cloudinary.com/arikxl/video/upload/v1737804737/Ella2023/wfalb9aeafrf2zzlm2my.mp4'


    return (
        <main className="start">
            <video className="background-video" autoPlay loop muted>
                <source src={coverVideo} type="video/mp4" />
            </video>
            <section className="content">
                <p className='winP'>You know your bubbles!</p>
                <button className='answer' style={{ padding: '20px 40px' }}
                    onClick={() => setScore(50)}>Play Again</button>
            </section>
        </main>
    )
}

export default Win