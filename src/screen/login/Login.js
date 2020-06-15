import React, {useState, useContext} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import CustomInput from '../../customComponent/CustomInput/CustomInput';
import Styles from './Styles';
import buttonStyles from '../../styleSheet/button';
import colors from '../../styleSheet/color';
import {AppContext} from '../../layout/AppProvider';
import AppAsyncStorage from '../../utils/AppAsyncStorage';
import UserService from '../../api/Services/customer';
import {
  notEqualsZero,
  validPassword,
  numberValidation,
} from '../../utils/Validation';
import Loading from '../../customComponent/loading/Loading';

const Login = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [loginId, setLoginId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const appContext = React.useContext(AppContext);

  const handleSubmit = async () => {
    setIsLoading(true);
    const data = {
      mobile: loginId,
      password: password,
    };

    await UserService.login(data).then(async result => {
      if (result.status === 200) {
        try {
          const data = JSON.stringify(result);
          console.log(data);
          if (result.data.statusCode === 1) {
            await appContext.updateValue('isLogin', 'true');
            await appContext.updateValue('mobile', `${loginId}`);
            await appContext.updateValue('role', `${result.data.role}`);
            await AppAsyncStorage.save('isLogin', 'true');
            await AppAsyncStorage.save('role', `${result.data.role}`);
            await AppAsyncStorage.save('firstName', `${result.data.firstName}`);
            await AppAsyncStorage.save('lastName', `${result.data.lastName}`);
            await AppAsyncStorage.save('mobile', `${loginId}`);
            await AppAsyncStorage.save('gender', `${result.data.gender}`);
            setIsLoading(false);
          } else {
            Alert.alert(`login failed`);
            setIsLoading(false);
          }
        } catch (error) {
          console.log('error', error);
          setIsLoading(false);
        }
      } else {
        console.log('Network failed');
        setIsLoading(false);
      }
    });
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
                <Image
                  source={require('../../assets/images/logo.png')}
                  style={[Styles.logo_img]}
                />
                {/* <Text Styles={[Styles.log_position]} /> */}
              </View>
            </View>
            <View>
              <View style={[Styles.pv_2]}>
                <CustomInput
                  isLabel={false}
                  isInputLabel={false}
                  placeholder="mobile number"
                  onChangeText={text => {
                    setLoginId(text);
                  }}
                  placeholderTextColor={colors.dimGrey}
                  value={loginId}
                  inputProps={{
                    keyboardType: 'number-pad',
                    autoCapitalize: 'none',
                  }}
                  maxLength={10}
                  errorStatus={
                    numberValidation(loginId) !== undefined &&
                    notEqualsZero(loginId)
                  }
                  errorMessage={numberValidation(loginId)}
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
                  errorStatus={
                    validPassword(password) !== undefined &&
                    notEqualsZero(password)
                  }
                  errorMessage={validPassword(password)}
                />
              </View>
            </View>
            {/* <View style={[Styles.ph_2]}>
              <Text style={[Styles.text, Styles.txt_right]}>
                Forgot Password
              </Text>
            </View> */}
            <View>
              <TouchableOpacity
                style={[buttonStyles.btnPosition]}
                disabled={
                  !password ||
                  !loginId ||
                  !(
                    validPassword(password) == undefined ||
                    !notEqualsZero(password)
                  )
                }
                onPress={() => {
                  handleSubmit();
                }}>
                <View
                  style={[
                    buttonStyles.btnContainer,
                    !loginId ||
                    (!password ||
                      !(
                        validPassword(password) == undefined ||
                        !notEqualsZero(password)
                      ))
                      ? buttonStyles.disabledBtn
                      : '',
                  ]}>
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
          <View style={[Styles.company_info]}>
            <Text style={[Styles.footer_text, Styles.logo_color]}>
              Rapid Technologies
            </Text>
          </View>
        </View>
        {isLoading ? <Loading /> : null}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
