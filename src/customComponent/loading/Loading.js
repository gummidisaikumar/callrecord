import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import colors from '../../styleSheet/color';

const Loading = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={colors.themeColor} />
    </View>
  );
};

export default Loading;
