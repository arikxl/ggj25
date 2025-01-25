
type Props = {
    setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Lose = ({ setScore }: Props ) => {


    return (
        <main className="lose">
            <section className="">
                <p>You Lost</p>
                <button className='answer' style={{padding:'20px 40px'}}
                    onClick={() => setScore(50)}>Play Again</button>
            </section>
        </main>
    )
}

export default Lose 
