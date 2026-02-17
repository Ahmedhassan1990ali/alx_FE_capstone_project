import { useState } from 'react'
import HomePage from './components/Homepage'
import Questionspage from './components/Questionspage'
import Resultspage from './components/Resultspage'

function App() {
  
  const [page, setPage] = useState("Home")
  const [category, setCategory] = useState(null)
  const [questions, setQuestions] = useState()
  const [score,setScore] = useState(0)

  return (
    <div className='min-h-screen w-10/12 md:w-8/12 mx-auto bg-gray-100 flex flex-col items-center p-4'>

      <h1 className='text-3xl font-bold text-gray-800 mb-1'>Alx Capstone Project</h1>
      <h2 className='text-xl text-gray-600 mb-1'>By Ahmed Hassan</h2>
      <h2 className='text-2xl font-semibold text-gray-700 mb-1'>Quiz App</h2>
      <hr className='w-48 border-t-2 border-gray-300 mb-2' />
      
      <div className='flex-1 w-11/12 text-center'>
      {page ==="Home" && <HomePage category={category} setCategory={setCategory} 
                                  setQuestions={setQuestions} setPage={setPage}/>}
      {page ==="Questions" && <Questionspage category={category} questions={questions}
                                              score={score} setScore={setScore}
                                              setPage={setPage} />}
      {page ==="Results" && <Resultspage score={score} setScore={setScore} 
                                         questions={questions} setQuestions={setQuestions}
                                         setCategory={setCategory} setPage={setPage}
                                         />}
      </div>
      
      <p className='text-s text-gray-400 mt-3'>
        Questions provided by{' '}
        <a 
          href="https://opentdb.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className='text-gray-500 hover:text-blue-600 underline'
        >
          Open Trivia Database
        </a>
      </p>

    </div>
    
  )
}

export default App
