import React from 'react'



export const withSuspense = (Component) =>{
    return (props) =>{
        return <React.Suspense fallback={<span>Loading profile...</span>}>
        <Component {...props}  />
        </React.Suspense>
    } 
    }