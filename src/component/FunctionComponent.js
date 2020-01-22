import React from 'react'

const FunctionComponent = props => {
const addAge = () => {
    console.log('masuk');
};

    return (
        <div>
            <h1>Function Component</h1>

            <p>I am {props.age} years old</p>
            <button onClick={props.addAge}>Add Age</button>
        </div>
    );
}

export default FunctionComponent;
