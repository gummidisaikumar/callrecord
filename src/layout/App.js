import React, {useState, useEffect} from 'react';
import {StatusBar, TabBarIOS, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import colors from '../styleSheet/color';
import Splash from '../screen/Splash/Splash';
import {AppProvider, AppContext} from './AppProvider';
import TabNavigation from '../customComponent/Navigation/TabNavigation';
import AuthNavigation from '../customComponent/Navigation/AuthNavigation';



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AppProvider>
      <StatusBar backgroundColor={colors.themeColor} />
      <AppContext.Consumer>
        {context =>
          !context.state.token ?(
            <NavigationContainer>
              <TabNavigation />
            </NavigationContainer>
          ) : (
            <NavigationContainer>
              <AuthNavigation />
            </NavigationContainer>
          )
        }
      </AppContext.Consumer>
    </AppProvider>
  );
};

export default App;
