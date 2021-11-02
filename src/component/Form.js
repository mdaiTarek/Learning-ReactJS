/* eslint-disable react/prefer-stateless-function */
import React from "react";

export default class Form extends React.Component {
  state = {
    title: "JavaScript",
    text: "JavaScript is awesome",
    option: "Angular",
    isAwesome: true,
  };

  // eslint-disable-next-line lines-between-class-members
  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        option: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    }
  };


  submitHandler = (e) => {
      e.preventDefault();
      const { title, text, option, isAwesome } = this.state;
      console.log(title, text, option, isAwesome);
  }


  // eslint-disable-next-line lines-between-class-members
  render() {
    const { title, text, option, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <textarea name="text" value={text} onChange={this.handleChange} />

          <br />
          <br />

          <select value={option} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>

          <br />
          <br />

          <input
            type="checkbox"
            value={isAwesome}
            onChange={this.handleChange}
          />

          <br />
          <br />
          
          <input type="submit" />

        </form>
      </div>
    );
  }
}
