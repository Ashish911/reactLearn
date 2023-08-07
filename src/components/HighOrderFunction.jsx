import React, { useEffect, useState } from 'react'

const withLoading = (WrappedCompoenent) => {
    return (props) => {
        const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsLoading(false)
            }, 2000)

            return () => clearTimeout(timer)

        }, [])

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return <WrappedCompoenent {...props} />

    }
}

const MyComponent = ({ data }) => {
    return <div>{data}</div>
}

const HighOrderFunction = () => {

    const MyComponentWithLoading = withLoading(MyComponent);

    return (
        <div>
            <MyComponentWithLoading data="Hello, World!" />
        </div>
    )
}

export default HighOrderFunction