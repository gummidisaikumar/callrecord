import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Linking,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';

import Styles from './Styles';
import colors from '../../styleSheet/color';
import GetFilesService from '../../api/Services/getFiles';
import buttonStyles from '../../styleSheet/button';
import {categoryData} from '../../utils/DropdownData';

const Dashboard = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    getAudioFiles();
  }, [getAudioFiles]);

  const getAudioFiles = async () => {
    await GetFilesService.getFilesList().then(async result => {
      if (result.status === 200) {
        try {
          await setData(result.data);
        } catch (error) {
          console.log('error', error);
        }
      } else {
        console.log('Network failed');
      }
    });
  };

  const dialCall = number => {
    console.log(number);
    let phoneNumber = '';
    if (number) {
      if (Platform.OS === 'android') {
        phoneNumber = `tel:+91${number}`;
      } else {
        phoneNumber = `telprompt:+91${number}`;
      }
      Linking.openURL(phoneNumber);
    }
  };

  // const handleOnSelect = (value) => {
  //   console.log(value)
  // }

  return (
    <MenuProvider>
    <View style={[Styles.viewContainer]}>
      <View style={[Styles.pb_2]}>
        <Text style={[Styles.title_text]}>Student Queries</Text>
      </View>
      {data.length > 0 ? (
        <View style={[Styles.listContatiner]}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View style={[Styles.card_container]} key={index}>
                  <View style={[Styles.boxShadow]}>
                    <View style={[Styles.fd_row, Styles.ph_2, Styles.pv_1]}>
                      <View style={[Styles.gridSection]}>
                        <View style={[Styles.fd_row, Styles.flex_1]}>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate('AudioPlay', {
                                fileURL: item.file_url,
                              })
                            }>
                            <View
                              style={[
                                Styles.circle_container,
                                Styles.border_width_2,
                                [
                                  item.status === '0'
                                    ? Styles.pending_status
                                    : Styles.completed_status,
                                ],
                              ]}>
                              <Icon
                                name={'file-audio'}
                                size={22}
                                color={colors.themeColor}
                              />
                            </View>
                          </TouchableOpacity>
                          <View style={[Styles.pl_2]}>
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate('AudioPlay', {
                                  fileURL: item.file_url,
                                })
                              }>
                              <Text style={[Styles.file_text]}>
                                {`${item.file_name}`}
                              </Text>
                            </TouchableOpacity>
                            <View
                              style={[
                                Styles.gridSection,
                                Styles.fd_row,
                                Styles.pt_1,
                              ]}>
                              <View>
                                <TouchableOpacity>
                                  <View
                                    style={[buttonStyles.btn_small_Container]}>
                                    <Text style={[buttonStyles.btn_small_text]}>
                                      Complete
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              </View>
                              <View style={[Styles.gridSection, Styles.pl_2]}>
                                <TouchableOpacity
                                  onPress={() => dialCall(item.mobile)}>
                                  <View
                                    style={[
                                      Styles.phone_container,
                                      Styles.circle_container,
                                      Styles.phone_circle,
                                    ]}>
                                    <Icon
                                      name="phone"
                                      size={14}
                                      color={colors.white}
                                    />
                                  </View>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={[Styles.gridSection, Styles.phone_position]}>
                        <View>
                          <Menu>
                            <MenuTrigger
                              style={[Styles.dots]}>
                              <Icon
                                name="ellipsis-v"
                                size={20}
                                color={colors.dimGrey}
                              />
                            </MenuTrigger>
                            <MenuOptions>
                              {categoryData.map((item, index) => (
                                <MenuOption onSelect={() => alert(item.value)}>
                                  <Text
                                    style={[Styles.text, Styles.txt_medium, item.key === 0 ? Styles.color_black: '']}>
                                    {item.value}
                                  </Text>
                                </MenuOption>
                              ))}
                            </MenuOptions>
                          </Menu>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
            keyExtractor={item => item.value}
          />
        </View>
      ) : null}
    </View>
    </MenuProvider>
  );
};

export default Dashboard;
