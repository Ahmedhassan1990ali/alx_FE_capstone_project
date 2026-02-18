// HistoryPage.jsx
import { useState, useEffect } from 'react';

const HistoryPage = ({ setPage }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Load from localStorage when component mounts
    const stored = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    setHistory(stored);
  }, []); // empty dependency array = run once on mount

  return (
    <div className="flex flex-col p-4">
        
        <div className='flex p-1 justify-between items-center bg-blue-200'>
            <button
                className="px-4 py-2 text-white rounded-lg bg-green-500 transition-colors text-xl"
                onClick={() => setPage("Results")}
            >
                Back
            </button>
            <h2 className="text-3xl font-bold ">Quiz History</h2>
            <button
                className="px-4 text-white rounded-lg bg-green-500 transition-colors text-l"
                onClick={() => {
                    setHistory([]);                     
                    localStorage.setItem('quizHistory', '[]');
                }}
            >
                Clear <br /> History
            </button>
        </div >
        {history.length === 0 ? (
            <p className="my-12 text-gray-500">No quizzes taken yet.</p>
        ) : (
            <div className="space-y-3">
            {history.slice().reverse().map(entry => (
                <div key={entry.id} className="border p-3 rounded bg-white shadow">
                <p>Date: {entry.date}</p>
                <p>Category: {entry.category}</p>
                <p>Difficulty: {entry.difficulty}</p>
                <p>Score: {entry.score} / {entry.total}</p>
                </div>
            ))}
            </div>
        )}
        <button
            className="mt-6 px-4 py-2 mx-auto text-white rounded-lg bg-green-500 transition-colors text-xl"
            onClick={() => setPage("Results")}
        >
            Back
        </button>
        </div>
  );
};

export default HistoryPage;