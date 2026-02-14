const Homepage = ({page,setPage, category, setCategory})=>{
    const categories = [
        "General Knowledge",
        "Computers",
        "Mathematics",
        "Geography",
    ];

    const onChose = (index) => {
        setCategory(categories[index])
    }

    return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-8'>
      <h1 className='text-3xl font-bold text-gray-800 mb-2'>Alx Capstone Project</h1>
      <h2 className='text-xl text-gray-600 mb-4'>By Ahmed Hassan</h2>
      <h2 className='text-2xl font-semibold text-gray-700 mb-2'>Quiz App</h2>
      <hr className='w-48 border-t-2 border-gray-300 mb-6' />
      <h2 className='text-xl text-gray-700 mb-4'>Select a category:</h2>
      <div className='flex flex-col gap-3 w-64'>
        {categories.map((value, index) => { 
          return (
            <button 
              key={index} 
              onClick={() => onChose(index)}
              className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors'
            >
              {value}
            </button>
          )
        })}
      </div>
    </div>
    )
}

export default Homepage;