import React, { Component } from 'react';

    
class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    birthday= () => {
        this.setState({age: this.state.age += 1});
    }
    render() {
        return (<div>
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <h3>Age: {this.state.age}</h3>
                    <h3>Hair Color: {this.props.hairColor}</h3>
                    <button onClick={this.birthday}>Birthday Button</button>
                </div>);
}
}

export default PersonCard;
