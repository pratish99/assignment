import './History.css'

const History = ({ history, clearHistory, showHistory }) => {
    return (
        <div className={`history-panel ${showHistory ? 'show' : ''}`}>
            <h2>History</h2>
            <div className="history-list">
                {history.map((entry, index) => (
                    <div key={index} className="history-item">{entry}</div>
                ))}
            </div>
            <button className="clear-history" onClick={clearHistory}>Clear History</button>
        </div>
    )
}

export default History