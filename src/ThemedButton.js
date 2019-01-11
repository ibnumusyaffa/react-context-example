import React, { Component } from 'react';
import ThemeContext from './ThemeContext';
class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);

    this.updateContext = this.updateContext.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      name: ''
    };
  }

  updateContext() {
    this.context.toggleTheme(this.state.name);
  }

  onChange(event) {
    this.setState({ name: event.target.value });
  }
  render() {
    return (
      <div style={{ backgroundColor: '#ffe6e6' }}>
        <div>
          <div>themedbutton component</div>
          <div>context value : {this.context.theme}</div>
          <input type="text" value={this.state.name} onChange={this.onChange} />
          <button onClick={this.updateContext}>update context</button>
        </div>
      </div>
    );
  }
}

export default ThemedButton;
