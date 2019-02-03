import React from 'react';

export const AppContext = React.createContext();

export default class AppProvider extends React.Component {
  state = {
    correct: 0,
    incorrect: 0,
    incCorrect: () => {
      this.setState({correct: this.state.correct + 1});
    },
    incIncorrect: () => {
      this.setState({incorrect: this.state.incorrect + 1});
    },
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
