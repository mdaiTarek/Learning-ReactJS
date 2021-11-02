import React from "react";

const type = {
  c: "Celcius",
  f: "Farenheit",
};

export default function TemperatureInput({
  temperature,
  scale,
  onTemperatureChange,
}) {
  return (
    <div>
      <fieldset>
        <legend>Enter temperature in {type[scale]}</legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </fieldset>
    </div>
  );
}
