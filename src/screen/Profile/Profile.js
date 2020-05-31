import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from './Styles';
import colors from '../../styleSheet/color';

const Profile = () => {
  return (
    <View style={[Styles.viewContainer]}>
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
            <Text style={[Styles.title_txt]}>Saikumar</Text>
          </View>
        </View>
        <View style={[Styles.fd_row]}>
          <View style={[Styles.grid_two]}>
            <Text style={[Styles.title_txt, Styles.pl_2]}>Gender</Text>
          </View>
          <View style={[Styles.grid_two]}>
            <Text style={[Styles.title_txt]}>Male</Text>
          </View>
        </View>
        <View style={[Styles.fd_row]}>
          <View style={[Styles.grid_two]}>
            <Text style={[Styles.title_txt, Styles.pl_2]}>Contact No</Text>
          </View>
          <View style={[Styles.grid_two]}>
            <Text style={[Styles.title_txt]}>+91 9618010075</Text>
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
