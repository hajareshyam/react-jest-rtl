import React, { useState } from "react"

const Calculator = ({ a, b }) => {
    const [result, setResult] = useState(0);
    const sum = (a, b) => {
        let result = a + b
        setResult(result)
    }

    const sub = (a, b) => {
        let result = a - b
        setResult(result)
    }

    const mul = (a, b) => {
        let result = a * b
        setResult(result)
    }

    const division = (a, b) => {
        let result = a / b
        setResult(result)
    }


    return (
        <div>
            {/* <div className="row">
                <input name="a" type="number" />
                <input name="b" type="number" />
            </div> */}
            <br></br>
            <div className="row">
                
                <button onClick={() => sum(a,b)}> Addition</button>
                <button onClick={() => sub(a,b)}> Subtraction</button>
                <button onClick={() => mul(a,b)}> Multiplication</button>
                <button onClick={() => division(a,b)}> Division</button>
            </div>
            <br></br>

            <div className="row">
            <label >Result : </label> <label test-id="result">{result}</label> 
            </div>
        </div>
    )
}

export default Calculator;