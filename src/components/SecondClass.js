import React, { Component } from "react";

export default class SecondClass extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }
  //this function is called before the render method.
  componentDidMount() {
    console.log("this is mount method");
    this.setState({ name: this.props.name + "-1" });
  }
  render() {
    console.log("this is render method");
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>From: {this.state.name}.</h2>
      </div>
    );
  }
  //this function is called when component lifeCycle is destroyed.
  componentWillUnmount() {
    console.log("this is unmount method");
    this.setState({ name: this.props.name + "-last" });
  }
}
