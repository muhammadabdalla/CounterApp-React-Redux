import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";

export class App extends Component {
  Increase = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrease = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div className="container">
        <h1>{this.props.count}</h1>
        <button onClick={this.Increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(App);
