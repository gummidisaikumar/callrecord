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
import VoiceRecord from '../../screen/VoiceRecord/VoiceRecord';
import Styles from './Styles';

const DashboardStack = createStackNavigator();
const ProfileStrack = createStackNavigator();
const VoiceRecordStack = createStackNavigator();
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
  <VoiceRecordStack.Navigator
    screenOptions={{
      headerTintColor: colors.white,
      headerStyle: {backgroundColor: colors.themeColor},
    }}>
    <VoiceRecordStack.Screen name={'VoiceRecord'} component={VoiceRecord} />
  </VoiceRecordStack.Navigator>
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
          } else if (route.name === 'VoiceRecord') {
            iconName = focused ? 'microphone' : 'microphone';
          }

          if (route.name === 'VoiceRecord') {
            return (
              <View
                style={[Styles.tabs_circle]}>
                <Icon name={iconName} size={40} color={colors.themeColor} />
              </View>
            );
          } else {
            return <Icon name={iconName} size={24} color={color} />;
          }
          // You can return any component that you like here!
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.grey,
        inactiveTintColor: colors.dimGrey,
        activeBackgroundColor: colors.themeColor,
        labelStyle: {
          fontSize: responsiveFontSize(14),
          fontFamily: fontFamily.segoeuiSemiBold,
        },
      }}>
      <AuthStack.Screen name={'Dashboard'} component={DashboardStackScreen} />
      <AuthStack.Screen
        name={'VoiceRecord'}
        component={VoiceRecordStackScreen}
      />
      <AuthStack.Screen name={'Profile'} component={ProfileStrackScreen} />
    </Tabs.Navigator>
  );
};

export default TabNavigation;
