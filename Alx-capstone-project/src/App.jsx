import { useState } from 'react'
import HomePage from './components/Homepage'
import Questionspage from './components/Questionspage'
import Resultspage from './components/Resultspage'
import DetailsPage from './components/DetailsPage'
import HistoryPage from './components/HistoryPage'

function App() {
  
  const [page, setPage] = useState("Home")
  const [category, setCategory] = useState({ id: 9, name: "General Knowledge" })
  const [questions, setQuestions] = useState([])
  const [chosed, setChosed] = useState([])
  const [score,setScore] = useState(0)
  const [difficulty, setDifficulty] = useState("easy")

  return (
    <div className='min-h-screen w-10/12 md:w-8/12 mx-auto bg-gray-100 flex flex-col items-center px-4 py-2'>

      <h1 className='text-3xl font-bold text-gray-800 mb-1'>Alx Capstone Project</h1>
      <h2 className='text-xl text-gray-600 mb-0.5'>By Ahmed Hassan</h2>
      <h2 className='text-4xl font-semibold text-gray-700 mb-1'>Quiz App</h2>
      <hr className='w-48 border-t-2 border-gray-300 mb-1' />
      
      <div className='flex flex-col flex-1 w-11/12  bg-amber-100 text-center'>
      {page ==="Home" && <HomePage category={category} setCategory={setCategory} 
                                  setQuestions={setQuestions} setPage={setPage}
                                  difficulty={difficulty} setDifficulty={setDifficulty}
                                  setChosed={setChosed}/>}
      {page ==="Questions" && <Questionspage category={category} questions={questions}
                                              score={score} setScore={setScore}
                                              setPage={setPage} difficulty={difficulty} 
                                              chosed={chosed}
                                              setChosed={setChosed}/>}
      {page ==="Results" && <Resultspage score={score} setScore={setScore} 
                                         questions={questions} setQuestions={setQuestions}
                                         setCategory={setCategory} setPage={setPage}
                                         setChosed={setChosed}
                                         />}
      {page ==="Details" && <DetailsPage questions={questions} chosed={chosed} setPage={setPage}/>}
      {page ==="History" && <HistoryPage setPage={setPage} />}
      </div>
      
      <p className='text-s text-gray-400 mt-2'>
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
