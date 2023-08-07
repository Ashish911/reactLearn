import React, { useCallback, useState } from 'react'

const ChildComponent = React.memo(({ onClick }) => {
    console.log('ChildComponent rendered');
    return <button onClick={onClick}>Click me</button>;
});

const ParentComponent = () => {

    const [count, setCount] = useState(0);

  // Without useCallback:
    // const handleClick = () => {
    //     setCount(count + 1);
    // };

  // With useCallback:
    const handleClick = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    console.log('ParentComponent rendered');

    return (
        <div>
            <p>Count: {count}</p>
            <ChildComponent onClick={handleClick} />
        </div>
    )
}

export default ParentComponent