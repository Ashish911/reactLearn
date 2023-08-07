import React, { Suspense } from 'react'

const LazyDynamicComponent = () => {
    
    const SomeComponent = React.lazy(() => import('./OldComponent'))

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <SomeComponent />
            </Suspense>
        </div>
    )
}

export default LazyDynamicComponent