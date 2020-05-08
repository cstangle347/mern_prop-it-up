import React, { Component } from 'react';

class PersonCard extends Component {
    //Boiler Plate ln 4&5
    constructor(props){
    super(props);
    this.state = {
        currentAge: this.props.age
    };
    }

    birthday = () => {
        this.setState({ currentAge: this.state.currentAge + 1 },)
        }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h1>{ lastName }  { firstName }</h1>
                <p>Age: { this.state.currentAge }</p>
                <p>Hiar Color: { hairColor }</p>
                <button 
                    onClick={ this.birthday }
                    className="btn" 
                    style={{backgroundColor: "navy", color: "#fff"}}
                >
                It's My Birthday!
                </button>
            </div>
            );
        
    }
}

export default PersonCard;


