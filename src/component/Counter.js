import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        };
    }

    addNumber = () => {
        this.setState({ number: this.state.number + 1});
    };

    minNumber = () => {
        if(this.state.number > 0) {
            this.setState({ number: this.state.number - 1});
        }
    }

    resetNumber = () => {
        this.setState({ number: 0 });
    };

    render() {
        return (
            <div>
                <h1>Clicker</h1>
                <h3>Our Clicker value's now is {this.state.number}</h3>
                <button onClick={this.addNumber}>
                    +
                </button>
                <button onClick={this.minNumber}>
                    -
                </button>
                <button onClick= {this.resetNumber}>Reset</button>
            </div>
        );
    }
}

export default Counter;