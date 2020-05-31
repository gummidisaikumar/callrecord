import React from 'react';

export const AppContext = React.createContext({});

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      token: '',
    };
  }

  updateValue = (key, val) => {
    console.log(key, val)
    this.setState({[key]: val});
  };

  logout = () => {
    this.setState({
      isLogin: false,
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          logout: this.logout,
          updateValue: this.updateValue,
        }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
