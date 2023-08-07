import React, { useCallback, useEffect, useState } from 'react'

const Greeting = ({ name }) => {
    console.log('Greeting rendered');
    return <p>Hello, {name}!</p>;
};

const MemoizedGreeting = React.memo(Greeting);

const Memo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Alice');

    useEffect(() => {
        const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const changeName = useCallback(() => {
        if (name == 'Alice') {
            setName('Ashish')
        } else {
            setName('Alice')
        }
    }, [])

    return (
        <div>
            <MemoizedGreeting name={name} />
            <button onClick={changeName}>
                Change
            </button>
            <p>Count: {count}</p>
        </div>
    )
}

export default Memo