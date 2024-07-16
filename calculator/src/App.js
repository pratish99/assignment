import './App.css';
import Calculator from './components/Calculator';
import History from './components/History';
import { useState, useEffect } from 'react';

function App() {
  const [history, setHistory] = useState([]);

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

    return (
        <div className="app">
            <Calculator addToHistory={addToHistory} />
            <History history={history} clearHistory={clearHistory} />
        </div>
    );
}

export default App;
