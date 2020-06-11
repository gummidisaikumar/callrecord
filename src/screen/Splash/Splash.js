import React, {useState, useContext} from 'react';
import {View, Image} from 'react-native';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/images/logo.png')}
        //style={[Styles.logo_img]}
      />
    </View>
  );
};

export default Splash;
