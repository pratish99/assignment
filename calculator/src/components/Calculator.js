import React, { useState } from 'react'
import './Calculator.css'

const Calculator = ({ addToHistory }) => {
    const [data, setData] = useState("");

    const getValue =(event) =>{
        console.log(event.target.value)
        setData(data + event.target.value)
    }
    const calculation = () =>{
        try {
            const result = evaluateExpression(data)
            setData(result);
            addToHistory(`${data} = ${result}`);
        } catch {
            setData("Error");
        }
    }

    const evaluateExpression = (expression) => {
        const operators = expression.split(/[\d.]+/).filter(Boolean);
        const numbers = expression.split(/[^.\d]+/).filter(Boolean).map(Number);

        let result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
            const operator = operators[i];
            const number = numbers[i + 1];
            if (operator === "+") {
                result += number;
            } else if (operator === "-") {
                result -= number;
            } else if (operator === "*") {
                result *= number;
            } else if (operator === "/") {
                result /= number;
            }
        }
        return result;
    };

    const back = () =>{
        setData(data.slice(0, -1)); 
    }
    const clear = () =>{
        setData("")
    }
    const clearEnd = () => {
        const lastOperatorIndex = findLastOperatorIndex(data);
        if (lastOperatorIndex !== -1) {
            setData(data.slice(0, lastOperatorIndex + 1)); 
        }
    }

    const findLastOperatorIndex = (expression) => {
        const operators = ['+', '-', '*', '/'];
        for (let i = expression.length - 1; i >= 0; i--) {
            if (operators.includes(expression[i])) {
                return i;
            }
        }
        return -1;
    }
    return (
    <>
        <div className='calculator'>
            <div className="container">
                <input placeholder="0" value={data} readOnly />
                <button onClick={clearEnd}>CE</button>
                <button onClick={clear}>C</button>
                <button onClick={back}>&#x232b;</button>
                <button onClick={getValue} value="/">/</button>

                <button onClick={getValue} value="7">7</button>
                <button onClick={getValue} value="8">8</button>
                <button onClick={getValue} value="9">9</button>
                <button onClick={getValue} value="*">*</button>

                <button onClick={getValue} value="4">4</button>
                <button onClick={getValue} value="5">5</button>
                <button onClick={getValue} value="6">6</button>
                <button onClick={getValue} value="-">-</button>

                <button onClick={getValue} value="1">1</button>
                <button onClick={getValue} value="2">2</button>
                <button onClick={getValue} value="3">3</button>
                <button onClick={getValue} value="+">+</button>

                <button value="" disabled style={{ visibility: 'hidden' }}></button>
                <button onClick={getValue} value="0">0</button>
                <button onClick={getValue} value=".">.</button>
                <button onClick={calculation}>=</button>
            </div>   
        </div>
    </>
    )
}

export default Calculator