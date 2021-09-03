import React from "react";

class CountUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: Number(this.props.min), length: Number(this.props.max) };
  }

  count = params => {
    let count = this.state.counter;
      if (this.state.counter > this.state.length) return;// Sort out bug where it goes up after max is reached
    setTimeout(() => {
      this.setState({
        counter: count + 1
      });
      if (this.state.counter === this.state.length) return;
      this.count();
    }, 100);
  };
  componentDidMount() {
    //this.count();
  }

  render() {
    return <p onMouseOver={this.count} onMouseOut={this.MouseOut}>{this.state.counter} years experience</p>;
  }
}

export default CountUp;
