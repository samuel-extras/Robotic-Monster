import React, {Component} from 'react';

import './App.css';
import  CardList  from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'

class App extends Component{
  constructor(){
    super();

    this.state = {
      
      robots: [],
      searchField:''
    };
  }

      handleChange = (event) => {
        this.setState({searchField: event.target.value});
      }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState( {robots:users}));
  }
  
  render(){
    const {robots, searchField} = this.state;
    const filterRobots = robots.filter(robots =>
       robots.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
       <h1>Robotic Monster</h1>
     
       <SearchBox
       placeholder='search robot'
       handleChange={this.handleChange}
       />
       <CardList robots={filterRobots} />
      
     
      </div>   
    );
  }
}
export default App;