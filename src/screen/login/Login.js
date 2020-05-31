import React, {useState, useContext} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../customComponent/CustomInput/CustomInput';
import Styles from './Styles';
import buttonStyles from '../../styleSheet/button';
import colors from '../../styleSheet/color';
import {AppContext} from '../../layout/AppProvider';
import AppAsyncStorage from '../../utils/AppAsyncStorage';

const Login = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [loginId, setLoginId] = useState('');
  const appContext = React.useContext(AppContext);

  const handleSubmit = async () => {
    await appContext.updateValue('token', 'saikumar');
    await AppAsyncStorage.save('token', 'saikumar');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
      <ScrollView
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="handled">
        <View style={[Styles.viewContainer]}>
          <View>
            <View style={[Styles.logo_container]}>
              <View style={[Styles.logo]}>
                <Text Styles={[Styles.log_position]} />
              </View>
            </View>
            <View>
              <View style={[Styles.pv_2]}>
                <CustomInput
                  isLabel={false}
                  isInputLabel={false}
                  placeholder="user name"
                  onChangeText={text => {
                    setLoginId(text);
                  }}
                  placeholderTextColor={colors.dimGrey}
                  value={loginId}
                  inputProps={{
                    keyboardType: 'default',
                    autoCapitalize: 'none',
                  }}
                  // errorStatus={
                  //   validPassword(password) !== undefined &&
                  //   notEqualsZero(password)
                  // }
                  // errorMessage={validPassword(password)}
                />
              </View>

              <View style={[Styles.pb_2]}>
                <CustomInput
                  isLabel={false}
                  isInputLabel={false}
                  placeholder="Password"
                  placeholderTextColor={colors.dimGrey}
                  onChangeText={text => {
                    setPassword(text);
                  }}
                  value={password}
                  inputProps={{
                    keyboardType: 'default',
                    autoCapitalize: 'none',
                    secureTextEntry: true,
                  }}
                  // errorStatus={
                  //   validPassword(password) !== undefined &&
                  //   notEqualsZero(password)
                  // }
                  // errorMessage={validPassword(password)}
                />
              </View>
            </View>
            <View style={[Styles.ph_2]}>
              <Text style={[Styles.text, Styles.txt_right]}>
                Forgot Password
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={[buttonStyles.btnPosition]}
                onPress={() => {
                  handleSubmit();
                }}>
                <View style={[buttonStyles.btnContainer]}>
                  <Text style={[buttonStyles.btn_text]}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[Styles.ph_2, Styles.pv_4]}>
              <Text style={[Styles.footer_text]}>
                Don't have an account?{' '}
                <Text
                  style={[Styles.text]}
                  onPress={() => navigation.push('Signup')}>
                  Register Now
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
