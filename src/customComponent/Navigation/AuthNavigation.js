import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screen/login/Login';
import Signup from '../../screen/Signup/Signup';

const AuthStack = createStackNavigator();

const AuthNavigation = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name={'Login'}
      component={Login}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name={'Signup'}
      component={Signup}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

export default AuthNavigation;
