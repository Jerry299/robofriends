import React, { Component } from "react";
import CardList from "../components/CardList.js";
//import { robots} from './robots'
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import { API_URL } from "../config";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      searchField: "",
      currency: null,
      code: null,
      population: null,
      capital: null
    };
  }
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  //for Robofriends
  /* componentDidMount() {
    //console.log(this.props.store.getState());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ robots: user }));
  } */

  componentDidMount() {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          countries: data
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { countries, searchField } = this.state;
    const filteredRobots = this.state.countries.filter(country => {
      return country.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !countries.length ? (
      <h1>Loading.........</h1>
    ) : (
      <div className="tc scroll-type">
        <h1 className="f1">We Countries</h1>
        <SearchBox searchChange={this.onSearchChange} />
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
