# Quiz App

A React‑based quiz application that fetches trivia questions from the [Open Trivia Database](https://opentdb.com/). Users can choose a category, difficulty, and number of questions, then answer them one by one. At the end, they see their score, can review each question with the correct answer, and view a history of past quizzes stored in the browser’s `localStorage`.

---

## Features

- **Multiple categories** – General Knowledge, Computers, Mathematics, Geography  
- **Three difficulty levels** – Easy, Medium, Hard  
- **Adjustable question count** – 3 to 10 questions per quiz  
- **Interactive quiz flow** – progress bar, score tracking, immediate answer feedback  
- **Results page** – shows final score, with buttons to restart, see details, or view history  
- **Details page** – lists every question with the correct answer and highlights the user’s choice (green = correct, red = wrong)  
- **History page** – displays all past quiz attempts with date, category, difficulty, and score  
- **Persistent history** – saved in `localStorage`; survives page reloads  
- **Fully responsive** – works on mobile, tablet, and desktop (Tailwind CSS)

---

## Tech Stack

- [React](https://reactjs.org/) (with Hooks)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Open Trivia Database API](https://opentdb.com/api_config.php)

---

## Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start the development server**  
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

4. **Build for production**  
   ```bash
   npm run build
   ```
   The optimized build will be in the `build` folder.

---

## How to Use

1. On the **home page**, select a category, difficulty, and number of questions.  
2. Click **Start** – questions are fetched from the API.  
3. Answer each question by clicking one of the four options.  
   - After selecting, the button turns green (correct) or red (wrong).  
   - The **Continue** button appears to move to the next question.  
4. On the last question, click **Finish** to see your results.  
5. From the results page you can:  
   - **Restart** a new quiz (returns to home).  
   - **Details** – review all questions with the correct answers and your choices.  
   - **History** – see a list of all completed quizzes.  
6. In the **History** page, you can clear all records using the **Clear History** button.

---

## Project Structure

```
src/
├── components/
│   ├── HomePage.jsx          # Category/difficulty selection, start quiz
│   ├── Questionspage.jsx     # Active quiz interface
│   ├── Resultspage.jsx       # Final score and navigation
│   ├── DetailsPage.jsx       # Per‑question review
│   └── HistoryPage.jsx       # Past quiz attempts (localStorage)
├── App.jsx                    # Main component, routing via state
├── index.js                   # Entry point
└── index.css                  # Tailwind imports
```

---

## API Notes

- Questions are fetched from `https://opentdb.com/api.php` with parameters:  
  `amount`, `category`, `difficulty`, `type=multiple` (multiple choice).  
- The API returns HTML‑encoded strings; they are decoded with a temporary `textarea` element.  
- Answers are shuffled so the correct option is not always in the same position.

---

## Future Improvements

- Add more categories (the API supports many more).  
- Allow “true/false” question type.  
- Implement a timer per question.  
- Add user authentication to save history across devices.  
- Deploy online (Netlify / Vercel).

---

## Credits

- Questions provided by the [Open Trivia Database](https://opentdb.com/) (licensed under CC BY‑SA 4.0).  
- Built by Ahmed Hassan as a capstone project for the ALX programme.

---

## License

This project is open source and available under the [MIT License](LICENSE).