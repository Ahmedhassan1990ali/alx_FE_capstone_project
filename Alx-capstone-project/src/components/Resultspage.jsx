
const Resultspage = ({score, setScore, setChosed,questions, setQuestions, setPage}) => {

    const onRestart = () => {
        setScore(0);
        setQuestions(null);
        setPage("Home");
        setChosed([]);
    }

    return (
        <div className="flex-1 flex  flex-col min-h-full">
            <div className="h-2/12">
                <h2 className='text-4xl font-bold text-gray-800 my-12 text-center'>
                    {`You scored ${score} out of ${questions.length}`}
                </h2>    
            </div>
            
            <div className="flex flex-1 items-center justify-around">
                <button className="block px-4 py-3  mx-auto text-white rounded-lg  bg-green-700
                     transition-colors text-center text-xl "
                onClick = {onRestart}
            >
            Restart
            </button>
            </div>
            
            <div className="flex flex-row items-center justify-center max-w-24 mb-4 gap-2 mx-auto px-16 ">
                <button className="block px-4 py-1 mt-5  mx-auto text-white rounded-lg  bg-green-500
                     transition-colors text-center text-xl "
                onClick = {()=>setPage("Details")}
                >
                Details
                </button>
                <button className="block px-4 py-1 mt-5  mx-auto text-white rounded-lg  bg-green-500
                        transition-colors text-center text-xl "
                    onClick = {()=>setPage("History")}
                >
                History
                </button>
                

            </div>


        </div>
    )



}

export default Resultspage;