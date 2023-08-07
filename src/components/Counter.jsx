import React from 'react'
import useLocalStorage from '../customHooks/useLocalStorage'

const Counter = () => {

    const [count, setCount] = useLocalStorage('count', 0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter