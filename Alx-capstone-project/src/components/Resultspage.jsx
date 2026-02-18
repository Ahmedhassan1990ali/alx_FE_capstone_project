
const Resultspage = ({score, setScore, setCategory,questions, setQuestions, setPage}) => {

    const onRestart = () => {
        setScore(0);
        setQuestions(null);
        setPage("Home")
    }

    return (
        <div>
            <h2 className='text-4xl font-bold text-gray-800 my-16 text-center'>
                {`You scored ${score} out of ${questions.length}`}
            </h2>
            <button className="block px-4 py-3 mt-5 mx-auto text-white rounded-lg  bg-green-700
                     transition-colors text-center text-xl "
                onClick = {onRestart}
            >
            Restart
            </button>
        </div>
    )



}

export default Resultspage;