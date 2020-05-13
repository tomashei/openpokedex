import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';


class App extends Component {
  constructor() { //needed for complex objects - creates state
    super() //needed to use with constructor
    this.state = {
      robots: robots, 
      searchfield: ''
    }
  }

  onSearchChange = (event) => {  //when createing own functions allways use this
    this.setState({searchfield: event.target.value})  //need to remember - always used in react to change state
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1>OpenPokedex</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={ filteredRobots } />
      </div>
    );
  }
}

export default App;