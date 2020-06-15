import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from './Styles';
import colors from '../../styleSheet/color';
import AppAsyncStorage from '../../utils/AppAsyncStorage';
import {AppContext} from '../../layout/AppProvider';
import Loading from '../../customComponent/loading/Loading';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [role, setRole] = useState('');
  const [gender, setGender] = useState('');
  const appContext = React.useContext(AppContext);

  useEffect(() => {
    getProfile();
  });

  const getProfile = async () => {
    const role = await AppAsyncStorage.get('role');
    const mobile = await AppAsyncStorage.get('mobile');
    const firstName = await AppAsyncStorage.get('firstName');
    const lastName = await AppAsyncStorage.get('lastName');
    const gender = await AppAsyncStorage.get('gender');

    setRole(role);
    setMobile(mobile);
    setFirstName(firstName);
    setLastName(lastName);
    setGender(gender);
  };

  const logout = async () => {
    await AppAsyncStorage.clear();
    await appContext.updateValue('isLogin', false);
  };

  return (
    <View style={[Styles.viewContainer]}>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={() => logout()}>
          <Icon name={'sign-out-alt'} size={25} color={colors.themeColor} />
        </TouchableOpacity>
      </View>
      <View style={[Styles.profile_position]}>
        <View style={[Styles.profile_container]}>
          <View style={[Styles.icon_position]}>
            <Icon name={'user'} size={65} color={colors.themeColor} />
          </View>
        </View>
      </View>
      <View style={[Styles.details_contaienr]}>
        <View style={[Styles.fd_row]}>
          <View style={[Styles.grid_two]}>
            <Text style={[Styles.title_txt, Styles.pl_2]}>Full Name</Text>
          </View>
          <View style={[Styles.grid_two]}>
            <Text style={[Styles.title_txt]}>
              {firstName} {lastName}
            </Text>
          </View>
        </View>
        <View style={[Styles.fd_row]}>
          <View style={[Styles.grid_two]}>
            <Text style={[Styles.title_txt, Styles.pl_2]}>Gender</Text>
          </View>
          <View style={[Styles.grid_two]}>
            <Text style={[Styles.title_txt]}>{gender}</Text>
          </View>
        </View>
        <View style={[Styles.fd_row]}>
          <View style={[Styles.grid_two]}>
            <Text style={[Styles.title_txt, Styles.pl_2]}>Contact No</Text>
          </View>
          <View style={[Styles.grid_two]}>
            <Text style={[Styles.title_txt]}>{mobile}</Text>
          </View>
        </View>
        {/* <View style={[Styles.fd_row]}>
          <View style={[Styles.grid_two]}>
            <Text style={[Styles.title_txt, Styles.pl_2]}>Professional</Text>
          </View>
          <View style={[Styles.grid_two]}>
            <Text style={[Styles.title_txt]}>Teacher</Text>
          </View>
        </View> */}
      </View>
    </View>
  );
};

export default Profile;
