import { useState } from 'react'

const Questionspage = ({category,difficulty,questions,setPage
                            ,score,setScore,setChosed,chosed}) => {

    const [currQuestion,setCurrentQuestion] = useState(0)
    const [selectedAns,setSelectedAns] = useState("")
    
    const onAnswer = (index) => {
        if (selectedAns === ""){
            setSelectedAns(index)
            setChosed([...chosed,index])
            if (questions[currQuestion].allAns[index] === questions[currQuestion].correctAns){
                setScore(score+1)
            }
        }

    }
    
    const onContinue = ()=>{
        if (currQuestion < questions.length -1){
            setCurrentQuestion(currQuestion+1)
            setSelectedAns("")
        }
        else {
            const newEntry = {
            id: Date.now(),
            category: category.name,
            difficulty: difficulty,
            date: new Date().toLocaleString(),
            score: score,
            total: questions.length,
            };

            const existing = JSON.parse(localStorage.getItem('quizHistory') || '[]');
            existing.push(newEntry);
            localStorage.setItem('quizHistory', JSON.stringify(existing));



            setPage("Results")
            setCurrentQuestion(0)
            setSelectedAns("")
        }
    }


    const buttonstate = (selectedAns,index) => {
        if (selectedAns === ""){  
            return "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
        }
        else if (questions[currQuestion].allAns[index] === questions[currQuestion].correctAns){
            return "bg-green-500"
        }
        else if (index === selectedAns){
            return "bg-red-500"
        }
        else {
            return "bg-gray-400"
        }
    }
    
    
    if (questions.length === 0) {
    return (
        <div className='mb-4 text-3xl text-blue-600 text-center mt-4'>
          Loading questions...
        </div>
    )
}

    return (
        <div>
        <h2 className='text-3xl font-bold bg-yellow-300 border text-center p-2 mb-1'>
            {`${category.name}` }
        </h2>
        <div className='flex flex-row'> 
            <div className='flex flex-1 justify-between border  px-4 py-2 mt-1 mb-1'>
                <p>{`Question ${currQuestion+1} of ${questions.length}` }</p>
                <p>{`Score : ${score} `}</p>
            </div>
            <div className='flex justify-between border font-bold bg-amber-200 px-4 py-2 mt-1 mb-1'>
                {difficulty}
            </div>
        </div>
        <div className='h-2 mb-3 rounded-full border-2 border-blue-800 bg-amber-100'>
            <div className='h-2 bg-amber-800 transition-width duration-300 overflow-hidden'
                 style={{ width: `${Math.floor(100 * (currQuestion + 1) / questions.length)}%` }}>   
            </div>
        </div>
        <h2 className='text-2xl flex items-center leading-8   font-semibold text-gray-800 min-h-24 my-1'>
            {questions[currQuestion].question}
        </h2>
        
        {questions[currQuestion].allAns.map((ans,index)=>{
            return (
                <button 
                    key={index}
                    className={`px-4 py-2 my-1 ${buttonstate(selectedAns,index)} text-white rounded-lg
                     transition-colors text-left w-full`}
                    onClick={()=>{onAnswer(index)}}
                    disabled={selectedAns===""? false: true}
                >
                    {ans}
                </button>
            )
        })}
        
        {selectedAns !== ""  && 
        <button className="block px-4 py-2 mt-3 mx-auto text-white rounded-lg  bg-green-700
                     transition-colors text-center text-xl   w-1/2"
                onClick = {onContinue}
        >
            {currQuestion !== questions.length-1? "Continue >>" : "Finish"}
        </button>
        }
        </div>
    )

}







export default Questionspage