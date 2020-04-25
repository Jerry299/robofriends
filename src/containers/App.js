import React, { Component } from "react";
import CardList from "../components/CardList.js";
//import { robots} from './robots'
import SearchBox from "../components/SearchBox.js";
import { connect } from "react-redux";
import Scroll from "../components/Scroll.js";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import { API_URL } from "../config";
import { setSearchField, requestCountries } from "../actions";
import Spinner from "./Spinner";

//define connect parameters
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    countries: state.requestCountries.countries,
    isPending: state.requestCountries.isPending,
    err: state.requestCountries.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  //for Robofriends
  /* componentDidMount() {
    //console.log(this.props.store.getState());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ robots: user }));
  } */

  componentDidMount() {
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          countries: data,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    //in the props we used robots instead of countries, we would fix that as soon as possible
    //so robots in the props is equal to countries
    const { countries } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = this.state.countries.filter((country) => {
      return country.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !countries.length ? (
      <Spinner />
    ) : (
      <div className="tc scroll-type">
        <h1 className="f1">We Countries</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
