
const DetailsPage = ({questions, chosed, setPage}) => {
    const qBgColor = (index)=> {
        const qAndAns = questions[index]
        const chInd = chosed[index]
        if (chInd === undefined) return "bg-gray-300";
        if (qAndAns.correctAns === qAndAns.allAns[chInd]){
            return "bg-green-300"
        } else {
            return "bg-red-300"
        }

    };

    return(
        <div className="flex flex-1 flex-col  p-2">
            <div className=" flex flex-col gap-3 flex-1">

            {questions.map((qAndAns,index)=>(
                <div key={index} className={`flex flex-col ${qBgColor(index)}`}>
                    <p className={`font-bold text-xl `}>{qAndAns.question}</p>
                    <p>{"Selected Answer : " + qAndAns.allAns[chosed[index]]}</p>
                    <p>{"Correct Answer : " + qAndAns.correctAns}</p>

                </div>
            )
            
            
            )}
            </div>

            <button className="block px-4 py-1 mt-5  mx-auto text-white rounded-lg  bg-green-500
                            transition-colors text-center text-xl "
                            onClick = {()=>setPage("Results")}
                            >
            Back
            </button>
        </div>

    )
}
export default DetailsPage;