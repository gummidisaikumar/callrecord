import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../screen/dashboard/Styles';
import colors from '../../styleSheet/color';
import buttonStyles from '../../styleSheet/button';

const CardView = props => {
  return (
    <View style={[Styles.viewContainer]}>
      {/* <View style={[Styles.pb_2]}>
          <Text style={[Styles.title_text]}>Student Queries</Text>
        </View> */}
      {props.data.length > 0 ? (
        <View style={[Styles.listContatiner]}>
          <FlatList
            data={props.data}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  style={[
                    Styles.card_container,
                    item.status === 'NOC'
                      ? Styles.noc_status
                      : item.status === 'working'
                      ? Styles.progress
                      : item.status === 'COMPLETED'
                      ? Styles.complete
                      : Styles.noc_status,
                  ]}
                  key={index}>
                  <View style={[Styles.boxShadow]}>
                    <View style={[Styles.fd_row, Styles.ph_2, Styles.pv_1]}>
                      <View style={[Styles.gridSection]}>
                        <View style={[Styles.fd_row, Styles.flex_1]}>
                          <TouchableOpacity
                            onPress={() =>
                              props.navigation.navigate('AudioPlay', {
                                type: 'base64',
                                base64: item.data.uri,
                                fileName: item.data.fileName,
                                recId: item.rec_id,
                              })
                            }>
                            <View
                              style={[
                                Styles.circle_container,
                                Styles.border_width_2,
                                [
                                  item.status === 'NOC'
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
                                props.navigation.navigate('AudioPlay', {
                                  type: 'base64',
                                  base64: item.data.uri,
                                  fileName: item.data.fileName,
                                })
                              }>
                              <Text style={[Styles.file_text]}>
                                {`${item.data.fileName}`}
                              </Text>
                            </TouchableOpacity>
                            <View>
                              <Text style={[Styles.text]}>
                                {`${item.status === 'NOC' ? 'NOT COMPLETE' : item.status === 'working' ? 'IN PROGRESS' : `${item.status}`}`}
                              </Text>
                            </View>
                            <View
                              style={[
                                Styles.gridSection,
                                Styles.fd_row,
                                Styles.pt_1,
                              ]}>
                              {props.role === 'Tutor' ? (
                                <View style={{flexDirection: 'row'}}>
                                  {item.status !== 'working' ?
                                  <View>
                                    <TouchableOpacity
                                      onPress={() => {
                                        props.itemSatus(item, 'working');
                                      }}>
                                      <View
                                        style={[
                                          buttonStyles.btn_small_Container,
                                          buttonStyles.inprogress__btn,
                                        ]}>
                                        <Text
                                          style={[buttonStyles.btn_small_text]}>
                                          IN PROGRESS
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                  : null}
                                  <View style={[item.status !== 'working' ? Styles.pl_2 : '']}>
                                    <TouchableOpacity
                                      onPress={() => {
                                        props.itemSatus(item, 'COMPLETED');
                                      }}>
                                      <View
                                        style={[
                                          buttonStyles.btn_small_Container,
                                        ]}>
                                        <Text
                                          style={[buttonStyles.btn_small_text]}>
                                          COMPLETE
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              ) : (
                                <View style={{flexDirection: 'row'}}>
                                  {item.status !== 'COMPLETED' ? (
                                    <View>
                                      <TouchableOpacity
                                        onPress={() => {
                                          props.itemSatus(item, 'DELETE');
                                        }}>
                                        <View
                                          style={[
                                            buttonStyles.btn_small_Container,
                                            buttonStyles.inprogress__btn,
                                          ]}>
                                          <Text
                                            style={[
                                              buttonStyles.btn_small_text,
                                            ]}>
                                            DELETE
                                          </Text>
                                        </View>
                                      </TouchableOpacity>
                                    </View>
                                  ) : null}
                                </View>
                              )}
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={[Styles.gridSection, Styles.phone_position]}>
                        {/* <View>
                            <Menu>
                              <MenuTrigger style={[Styles.dots]}>
                                <Icon
                                  name="ellipsis-v"
                                  size={20}
                                  color={colors.dimGrey}
                                />
                              </MenuTrigger>
                              <MenuOptions>
                                {props.subjectList.map((item, index) => (
                                  <MenuOption
                                    onSelect={() => alert(item.subject_id)}>
                                    <Text
                                      style={[Styles.text, Styles.txt_medium]}>
                                      {item.subj_name}
                                    </Text>
                                  </MenuOption>
                                ))}
                              </MenuOptions>
                            </Menu>
                          </View> */}
                        {props.role === 'Tutor' ? (
                          <TouchableOpacity
                            onPress={() => props.dialCall(item.mobile)}>
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
                        ) : null}
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
  );
};

export default CardView;
