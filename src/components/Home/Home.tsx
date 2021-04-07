import React from 'react';

export const Home = (props:any) => {
    return (
        <div>
            <h1>This is the new main page</h1>
            <h4>{props.title}</h4>
        </div>
    )
}