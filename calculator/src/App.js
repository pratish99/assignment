import './App.css';
import Calculator from './components/Calculator';
import History from './components/History';
import { useState, useEffect } from 'react';

function App() {
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(true);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
        setHistory(storedHistory);
    }, []);

    const addToHistory = (entry) => {
        const updatedHistory = [...history, entry];
        setHistory(updatedHistory);
        localStorage.setItem('history', JSON.stringify(updatedHistory));
    };

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem('history');
    };

    const toggleHistory = () => {
      setShowHistory(!showHistory);
    };

    return (
        <div className="app">
            <div className="hamburger" onClick={toggleHistory}>
                ☰ 
            </div>
            <Calculator addToHistory={addToHistory} />
            {showHistory && <History history={history} clearHistory={clearHistory} />}
            {showHistory && <div className="overlay" onClick={toggleHistory}></div>}
        </div>
    );
}

export default App;
