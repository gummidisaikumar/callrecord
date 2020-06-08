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
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomInput from '../../customComponent/CustomInput/CustomInput';
import Styles from './Styles';
import buttonStyles from '../../styleSheet/button';
import colors from '../../styleSheet/color';
import UserService from '../../api/Services/customer';
import { validPassword, notEqualsZero, email, numberValidation } from '../../utils/Validation';

const genderData = [
  {
    name: 'Male',
    value: 1,
    isCheck: true,
  },
  {
    name: 'Female',
    value: 2,
    isCheck: false,
  },
];

const userData = [
  {
    name: 'Student',
    value: 1,
    isCheck: true,
  },
  {
    name: 'Tutor',
    value: 2,
    isCheck: false,
  },
];

const Signup = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState(genderData);
  const [userType, setUserType] = useState(userData);
  const [createPassword, setCreatePassword] = useState('');
  const [emailId, setEmailId] = useState('');

  const handleGender = value => {
    let data = [];
    gender.map(item => {
      if (item.value === value) {
        item.isCheck = true;
        data.push(item);
      } else {
        item.isCheck = false;
        data.push(item);
      }
    });
    setGender(data);
  };

  const handleUserType = value => {
    let data = [];
    userType.map(item => {
      if (item.value === value) {
        item.isCheck = true;
        data.push(item);
      } else {
        item.isCheck = false;
        data.push(item);
      }
    });
    setUserType(data);
  };

  const handleSubmit = async () => {
    let role = '';
    let genderValue = '';

    userType.map(item => {
      if (item.isCheck === true) {
        role = item.name;
      }
    });

    gender.map(item => {
      if (item.isCheck === true) {
        genderValue = item.name;
      }
    });

    const data = {
      firstName: firstName,
      lastName: lastName,
      role: role,
      gender: genderValue,
      mobile: mobileNumber,
      email: emailId,
      password: createPassword,
    };

    await UserService.register(data).then(async result => {
      if (result.status === 200) {
        try {
          navigation.push('Login');
        } catch (error) {
          console.log('error', error);
        }
      } else {
        console.log('Network failed');
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
            <View style={[Styles.back_arrow_container]}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={[Styles.flex_1, Styles.back_arrow_position]}>
                  <Icon name="angle-left" size={30} color={colors.black} />
                  <Text style={[Styles.back_text, Styles.pl_2]}>Back</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[Styles.title_container]}>
              <Text style={[Styles.title_text]}>Create Account</Text>
            </View>
            <View>
              <View style={[Styles.pv_1, Styles.ph_2]}>
                <View style={[Styles.flex_1, Styles.fd_row]}>
                  {userType.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        Styles.fd_row,
                        Styles.grid_two,
                        Styles.alignItems_center,
                      ]}
                      onPress={() => handleUserType(item.value)}>
                      <Icon
                        name={item.isCheck ? 'dot-circle' : 'circle'}
                        size={20}
                        color={colors.themeColor}
                      />
                      <Text style={[Styles.pl_2]}>{item.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View style={[Styles.pv_1]}>
                <CustomInput
                  isLabel={false}
                  isInputLabel={false}
                  placeholder="first name*"
                  onChangeText={text => {
                    setFirstName(text);
                  }}
                  placeholderTextColor={colors.dimGrey}
                  value={firstName}
                  inputProps={{
                    keyboardType: 'default',
                    autoCapitalize: 'none',
                  }}
                  minLength={2}
                />
              </View>
              <View style={[Styles.pv_1]}>
                <CustomInput
                  isLabel={false}
                  isInputLabel={false}
                  placeholder="last name"
                  onChangeText={text => {
                    setLastName(text);
                  }}
                  placeholderTextColor={colors.dimGrey}
                  value={lastName}
                  inputProps={{
                    keyboardType: 'default',
                    autoCapitalize: 'none',
                  }}
                  minLength={2}
                />
              </View>
              <View style={[Styles.pv_1, Styles.ph_2]}>
                <View style={[Styles.flex_1, Styles.fd_row]}>
                  {gender.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        Styles.fd_row,
                        Styles.grid_two,
                        Styles.alignItems_center,
                      ]}
                      onPress={() => handleGender(item.value)}>
                      <Icon
                        name={item.isCheck ? 'dot-circle' : 'circle'}
                        size={20}
                        color={colors.themeColor}
                      />
                      <Text style={[Styles.pl_2]}>{item.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View style={[Styles.pv_1]}>
                <CustomInput
                  isLabel={false}
                  isInputLabel={false}
                  placeholder="mobile number*"
                  onChangeText={text => {
                    setMobileNumber(text);
                  }}
                  placeholderTextColor={colors.dimGrey}
                  value={mobileNumber}
                  inputProps={{
                    keyboardType: 'number-pad',
                    autoCapitalize: 'none',
                  }}
                  errorStatus={
                    numberValidation(mobileNumber) !== undefined && notEqualsZero(mobileNumber)
                  }
                  errorMessage={numberValidation(mobileNumber)}
                />
              </View>
              <View style={[Styles.pv_1]}>
                <CustomInput
                  isLabel={false}
                  isInputLabel={false}
                  placeholder="emailId*"
                  onChangeText={text => {
                    setEmailId(text);
                  }}
                  placeholderTextColor={colors.dimGrey}
                  value={emailId}
                  inputProps={{
                    keyboardType: 'email-address',
                    autoCapitalize: 'none',
                  }}
                  errorStatus={
                    email(emailId) !== undefined && notEqualsZero(emailId)
                  }
                  errorMessage={email(emailId)}
                />
              </View>
              <View style={[Styles.pv_1]}>
                <CustomInput
                  isLabel={false}
                  isInputLabel={false}
                  placeholder="create password*"
                  onChangeText={text => {
                    setCreatePassword(text);
                  }}
                  placeholderTextColor={colors.dimGrey}
                  value={createPassword}
                  inputProps={{
                    keyboardType: 'default',
                    autoCapitalize: 'none',
                    secureTextEntry: true,
                  }}
                  errorStatus={
                    validPassword(createPassword) !== undefined && notEqualsZero(createPassword)
                  }
                  errorMessage={validPassword(createPassword)}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={[buttonStyles.btnPosition]}
                disabled={
                  !createPassword ||
                  !emailId ||
                  !(
                    validPassword(createPassword) == undefined ||
                    !notEqualsZero(createPassword)
                  )
                }
                onPress={() => handleSubmit()}>
                <View style={[buttonStyles.btnContainer,
                    !createPassword || !emailId || !mobileNumber ||
                    !(validPassword(createPassword) == undefined ||!notEqualsZero(createPassword)) &&
                    !(email(emailId) !== undefined || !notEqualsZero(emailId)) &&
                    !(numberValidation(mobileNumber) !== undefined && !notEqualsZero(mobileNumber))
                      ? buttonStyles.disabledBtn
                      : '']}>
                  <Text style={[buttonStyles.btn_text]}>Register</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[Styles.ph_2, Styles.pv_2]}>
              <Text style={[Styles.footer_text]}>
                If you arleady have account?{' '}
                <Text
                  style={[Styles.text]}
                  onPress={() => navigation.push('Login')}>
                  Login
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
