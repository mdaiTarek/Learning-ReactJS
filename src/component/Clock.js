/* eslint-disable prefer-const */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date(), locale: "bn-BD" };
  //   this.handleClick = this.handleClick.bind(this);
  // }
  state = { date: new Date(), locale: "bn-BD" };

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  // handleClick = () => {
  //   this.setState({
  //     locale: "en-US",
  //   });
  // }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date, locale } = this.state;
    let button;
    if (locale === "bn-BD") {
      button = <Button change={this.handleClick} locale="en-US" />;
    } else {
      button = <Button change={this.handleClick} locale="bn-BD" />;
    }
    
    return (
      <div>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
        </h1>
        {/* <button type="button" onClick={this.handleClick}>Click Me</button> */}
        {/* <button type="button" onClick={this.handleClick.bind(this, 'en-US')}>Click Me</button> */}
        {/* <button type="button" onClick={() => this.handleClick('en-US')}>Click Me</button> */}
        {/* {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" />
        )} */}
        {button}
      </div>
    );
  }
}

export default Clock;
