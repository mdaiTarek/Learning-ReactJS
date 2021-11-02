/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: 'c',
  };

  handleChange = (e, scale) => {
    console.log(e.target.value);
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature; 
    return (
      <div>
        <TemperatureInput
          temperature={celsius}
          scale="c"
          onTemperatureChange={this.handleChange}
        />
        <TemperatureInput
          temperature={fahrenheit}
          scale="f"
          onTemperatureChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}
