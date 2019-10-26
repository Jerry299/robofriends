import React, {Component} from 'react';
import CardList from "../components/CardList.js";
//import { robots} from './robots'
import SearchBox from "../components/SearchBox.js";
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField : ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    componentDidMount(){
      console.log(this.props.store.getState());
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(user => this.setState( {robots: user}))
        
    }
        
    



        render() {
            const { robots, searchField} = this.state;
            const filteredRobots = this.state.robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchField.toLowerCase())
            })
            return (!robots.length)?
                 (
                    <h1>Loading.........</h1>
                )
             :
                (
                  <div className="tc scroll-type">
                    <h1 className="f1">Jerry's RobotFriends</h1>
                    <SearchBox
                      searchChange={this.onSearchChange}
                    />
                    <Scroll>
                      <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                      </ErrorBoundary>
                    </Scroll>
                  </div>
                );
        }  
}
export default App;