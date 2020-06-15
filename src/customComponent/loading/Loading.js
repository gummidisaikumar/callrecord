import React from 'react';
import {View} from 'react-native';
import styles from './Styles';
import {BallIndicator} from 'react-native-indicators';

const Loader = () => (
  <View style={styles.progressBarContainer}>
    <BallIndicator
      color={`${styles.progressBarColor.color}`}
      animationDuration={500}
    />
  </View>
);

export default Loader;
