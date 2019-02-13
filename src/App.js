import React, { Component } from 'react';
import './App.css';
import List from './List';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'Take out Trash',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    if (this.state.term !== " " || this.state.term !== "") {
      event.preventDefault();
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      });
    } else {
      alert("This cannot be blank")
    }

  }

  render() {
    return (
      <div>
        <form className="App container d-flex  p-5" onSubmit={this.onSubmit}>
          <input className="form-control" value={this.state.term} onChange={this.onChange} />
          <button className="btn btn-primary">Submit</button>
        </form>
        <div className="container">
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
}
