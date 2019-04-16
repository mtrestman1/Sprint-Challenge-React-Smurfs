import React, { Component } from 'react';
import Axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    Axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      console.log(response)
      this.setState({
        newSmurf: response.data,
        name: '',
        age: '',
        height: ''
      })
    })
    .catch(err => console.log(err))
  }

  handleInputChange = e => {
    let value = e.target.value;
    if (e.target.name === 'age') {
      value = parseInt(value, 10)
    }
    this.setState({ [e.target.name]: value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
