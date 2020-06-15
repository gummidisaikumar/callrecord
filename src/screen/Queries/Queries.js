import React, {useState, useEffect} from 'react';
import fs from 'react-native-fs';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
  renderers,
} from 'react-native-popup-menu';
import {useFocusEffect} from '@react-navigation/native';
import SoundRecorder from 'react-native-sound-recorder';
import {
  TouchableOpacity,
  View,
  Text,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {AppContext} from '../../layout/AppProvider';
import Styles from './Styles';
import buttonStyles from '../../styleSheet/button';
import GetFilesService from '../../api/Services/getFiles';
import colors from '../../styleSheet/color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppAsyncStorage from '../../utils/AppAsyncStorage';
import Loading from '../../customComponent/loading/Loading';


//let recordingPath;
const getGalleryAccessPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Allow',
        message: 'AudioRuntimePermission to record audio?',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.RECORD_AUDIO) {
      console.log('permission granted');
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
  }
};

const Queries = ({navigation}) => {
  const [subjectList, setSubjectList] = useState([]);
  const [subject, setSubject] = useState('Select Subject');
  const [filePath, setFilePath] = useState('');
  const [fileName, setFileName] = useState('');
  const [uri, setUri] = useState('');
  const [isRecord, setIsRecord] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [mobile, setMobile] = useState('');
  const [isModal, setIsModal] = useState(false);
  const {SlideInMenu} = renderers;
  const appContext = React.useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    getGalleryAccessPermission();
    setSubjectList(appContext.state.subjects);
    setMobile(appContext.state.mobile);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      // reset();
    }, [reset]),
  );

  const onRecord = async () => {
    setIsRecord(true);
    //  const path = fs.DocumentDirectoryPath + '/AUD_9618010075_saikumar001.mp3';
    const firstName = await AppAsyncStorage.get('firstName');
    const prefixPath =
      `AUD_` +
      `${mobile}_${firstName}_${Math.random()
        .toString(36)
        .substring(4)}`;
    // console.log(prefixPath);
    SoundRecorder.start(
      SoundRecorder.PATH_CACHE + '/' + prefixPath + '.mp3',
    ).then(function() {
      console.log('started recording');
      setFileName(prefixPath);
    });
  };

  const onStop = async () => {
    SoundRecorder.stop().then(async function(result) {
      console.log('stopped recording, audio file saved at: ' + result.path);
      const base64 = await fs.readFile(result.path, 'base64');
      //console.log('base', base64);
      setFilePath(result.path);
      setIsPlay(true);
      setUri(base64);
    });
  };

  const handleSelect = name => {
    setSubject(name);
  };

  const handleSubmit = async navigation => {
    setIsLoading(true)
    const data = {
      mobile: mobile,
      subject: subject,
      fileName: fileName,
      uri: uri,
      filePath: filePath,
    };

    await GetFilesService.queriesRecord(data)
      .then(async result => {
        if (result.status === 200) {
          try {
            await reset();
            setIsLoading(false)
            navigation.navigate('Dashboard', {screen: 'Dashboard'});
          } catch (error) {
            setIsLoading(false)
            console.log('error', error);
          }
        } else {
          setIsLoading(false)
          Alert.alert('Network failed');
        }
      })
      .catch(function(error) {
        console.log('err', error);
      });
  };

  const reset = () => {
    setIsPlay(false);
    setIsRecord(false);
    setSubject('Select Subject');
    setFilePath('');
    setUri('');
    setFileName('');
  };


  return (
    <View style={{flex: 1}}>
        <View style={[Styles.viewContainer]}>
          <View style={[Styles.mb_2, Styles.reset]}>
            <TouchableOpacity onPress={reset}>
              <Text style={[Styles.reset_text]}>Reset</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Menu renderer={SlideInMenu}>
              <MenuTrigger>
                <View style={[Styles.dropdown_container]}>
                  <Text>{subject}</Text>
                </View>
              </MenuTrigger>
              <MenuOptions>
                {subjectList.map((item, index) => (
                  <MenuOption onSelect={() => handleSelect(item.subj_name)}>
                    <Text
                      style={[
                        Styles.text,
                        Styles.txt_medium,
                        subject === item.subj_name ? Styles.color_black : '',
                      ]}>
                      {item.subj_name}
                    </Text>
                  </MenuOption>
                ))}
              </MenuOptions>
            </Menu>
          </View>
          {isRecord ? (
            !isPlay ? (
              <View style={[Styles.mv_2, Styles.audio_file_icon]}>
                <TouchableOpacity>
                  <Text style={[Styles.txt_medium, Styles.text_large]}>
                    Recording...
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={[Styles.mv_2, Styles.audio_file_icon]}>
                <TouchableOpacity>
                  <Icon
                    name={'file-audio'}
                    size={100}
                    color={colors.themeColor}
                  />
                </TouchableOpacity>
              </View>
            )
          ) : null}
          <View style={[Styles.mv_2, Styles.fd_row]}>
            {!isRecord ? (
              <View style={[Styles.gridSection]}>
                <TouchableOpacity onPress={() => onRecord()}>
                  <View style={[buttonStyles.btn_transparent]}>
                    <Text
                      style={[
                        buttonStyles.btn_transparent_text,
                        Styles.color_black,
                      ]}>
                      Record
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={[Styles.gridSection, Styles.alignItems_center]}>
                {!isPlay ? (
                  <TouchableOpacity onPress={() => onStop()}>
                    <View>
                      <Icon
                        name={'stop-circle'}
                        size={60}
                        color={colors.danger}
                      />
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity 
                    onPress={() =>
                      navigation.navigate('AudioPlay', {
                        type: 'base64',
                        base64: uri,
                        fileName: fileName,
                      })
                    }
                    >
                    <View>
                      <Icon
                        name={'play-circle'}
                        size={60}
                        color={colors.green}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
          <View style={[Styles.mv_2]}>
            <TouchableOpacity
              disabled={!subject && !uri}
              onPress={() => handleSubmit(navigation)}>
              <View
                style={[
                  buttonStyles.btnContainer,
                  subject === 'Select Subject' || uri === ''
                    ? buttonStyles.disabledBtn
                    : '',
                ]}>
                <Text style={[buttonStyles.btn_text]}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      {isLoading ? <Loading /> : null}
    </View>
  );
};

export default Queries;
