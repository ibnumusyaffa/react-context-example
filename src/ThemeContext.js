import React, { Component } from 'react';
// const ThemeContext = React.createContext('light');
const ThemeContext = React.createContext({
  theme: 'blue',
  toggleTheme: () => {}
});
export default ThemeContext;
