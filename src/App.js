import React, { Component } from 'react';
import ThemedButton from './ThemedButton';
import ThemeContext from './ThemeContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.state = {
      theme: 'blue',
      toggleTheme: this.toggleTheme
    };
  }

  toggleTheme(value) {
    this.setState({
      theme: value
    });
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar() {
  return (
    <div style={{ backgroundColor: '#cce5ff' }}>
      <div>toolbar component</div>
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => <div>context value : {theme}</div>}
      </ThemeContext.Consumer>
      <ThemedButton />
    </div>
  );
}

export default App;
