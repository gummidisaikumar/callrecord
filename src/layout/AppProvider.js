import React from 'react';
import GetSubjectService from '../api/Services/getSubjects';

export const AppContext = React.createContext({});

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      token: '',
      subjects: [],
    };
  }

  componentDidMount(){
    this.getSubjects();
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

  getSubjects = async () => {
      await GetSubjectService.getSubject().then(async result => {
        if (result.status === 200) {
          try {
            this.setState({
              subjects: result.data,
            });
          } catch (error) {
            console.log('error', error);
          }
        } else {
          console.log('Network failed');
        }
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
