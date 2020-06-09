import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../../screen/dashboard/Dashboard';
import Profile from '../../screen/Profile/Profile';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../styleSheet/color';
import {responsiveFontSize} from '../../styleSheet/responsiveSize';
import {fontFamily} from '../../styleSheet/fonts';
import AudioPlay from '../../screen/audioPlay/AudioPlay';
import Queries from '../../screen/Queries/Queries';
import Styles from './Styles';
import { flexVariable } from '../../styleSheet/flexVariable';
import { AppContext } from '../../layout/AppProvider';

const DashboardStack = createStackNavigator();
const ProfileStrack = createStackNavigator();
const QueriesStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const AuthStack = createStackNavigator();

const DashboardStackScreen = () => (
  <DashboardStack.Navigator
    screenOptions={{
      headerTintColor: colors.white,
      headerStyle: {backgroundColor: colors.themeColor},
    }}>
    <DashboardStack.Screen name={'Dashboard'} component={Dashboard} />
    <DashboardStack.Screen name={'AudioPlay'} component={AudioPlay} />
  </DashboardStack.Navigator>
);

const VoiceRecordStackScreen = () => (
  <QueriesStack.Navigator
    screenOptions={{
      headerTintColor: colors.white,
      headerStyle: {backgroundColor: colors.themeColor},
    }}>
    <QueriesStack.Screen name={'Record'} component={Queries} />
    <DashboardStack.Screen name={'AudioPlay'} component={AudioPlay} />
  </QueriesStack.Navigator>
);

const ProfileStrackScreen = () => (
  <ProfileStrack.Navigator
    screenOptions={{
      headerTintColor: colors.white,
      headerStyle: {backgroundColor: colors.themeColor},
    }}>
    <ProfileStrack.Screen name={'Profile'} component={Profile} />
  </ProfileStrack.Navigator>
);

const TabNavigation = () => {
  const appContext = React.useContext(AppContext);
  const role = appContext.state.role;
  console.log('ap', appContext.state.isLogin, appContext.state.role);

  return (
    <Tabs.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Record') {
            iconName = focused ? 'microphone' : 'microphone';
          }

          if (route.name === 'Record') {
            return (
              <View
                style={[Styles.tabs_circle]}>
                  <Icon name={iconName} size={34} color={colors.themeColor} />
              </View>
            );
          } else {
            return <Icon name={iconName} size={24} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.black,
        inactiveTintColor: colors.dimGrey,
       // activeBackgroundColor: colors.themeColor,
        labelStyle: {
          fontSize: responsiveFontSize(14),
          fontFamily: fontFamily.segoeuiSemiBold,
          fontWeight: flexVariable.bold
        },
      }}>
      <AuthStack.Screen name={'Dashboard'} component={DashboardStackScreen} />
      {role === 'Student' ?
      <AuthStack.Screen
        name={'Record'}
        component={VoiceRecordStackScreen}
      />: null}
      <AuthStack.Screen name={'Profile'} component={ProfileStrackScreen} />
    </Tabs.Navigator>
  );
};

export default TabNavigation;
