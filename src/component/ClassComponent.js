import React from 'react'
import FunctionComponent from './FunctionComponent';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Pirman',
            age: 29,
            city: 'Jakarta'
        };
    }

    changeName = () => {
        this.setState({ name: 'Bima'});
    };

    addAge = () => {
        this.setState({ age: this.state.age + 1});
    };

    render() {
        return (
            <div>
                <h1>Class Component</h1>
                 <h6>Hello my name is {this.state.name}. I live in{' '}{this.state.city}. I am {this.state.age} years old
                </h6>

                <div>
                    <button onClick= {this.changeName}>Change Name</button>
                    <button onClick={this.addAge}>+
                    </button>
                    <button
                    onClick={() => {
                        this.setState({ age: this.state.age - 1});
                    }}
                    >
                        -
                    </button>
                </div>
                <FunctionComponent 
                age={this.state.age} 
                addAge={this.addAge}
                />
                <FunctionComponent age={11}/>
            </div>
        );
    }
}

export default ClassComponent;