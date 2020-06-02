import React, {useState, useEffect} from 'react';
import fs from 'react-native-fs';
import {decode} from 'base64-arraybuffer';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
  renderers,
} from 'react-native-popup-menu';
import {RNVoiceRecorder} from 'react-native-voice-recorder';
import {TouchableOpacity, View, Text} from 'react-native';
import {AppContext} from '../../layout/AppProvider';
import Styles from './Styles';
import buttonStyles from '../../styleSheet/button';


let recordingPath;

const Queries = () => {
  const [visible, setVisible] = useState(false);
  const [subjectList, setSubjectList] = useState([]);
  const appContext = React.useContext(AppContext);
  const [subject, setSubject] = useState('Select Subject');
  const [filePath, setFilePath] = useState('');
  const {SlideInMenu} = renderers;

  useEffect(() => {
    setSubjectList(appContext.state.subjects);
  }, []);

  const onRecord = () => {
    RNVoiceRecorder.Record({
      format: 'wav',
      onDone: async path => {
        console.log('record done: ' + path);

        recordingPath = path;
        const base64 = await fs.readFile(recordingPath, 'base64');
        //console.log(base64);
        const arrayBuffer = await decode(base64);
        console.log("sddf", arrayBuffer);
        setFilePath(recordingPath)
        //await AppAsyncStorage.save('path', recordingPath);
      },
      onCancel: () => {
        console.log('on cancel');
      },
    });
  };

  const onPlay = () => {
    RNVoiceRecorder.Play({
      path: recordingPath,
      format: 'wav',
      onDone: path => {
        console.log('play done: ' + path);
      },
      onCancel: () => {
        console.log('play cancelled');
      },
    });
  };

  const handleSelect = name => {
    setSubject(name);
  };

  return (
    <MenuProvider>
      <View style={[Styles.viewContainer]}>
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
        {filePath ?
        <View style={[Styles.mv_2]}>
          <Text style={[Styles.text]}>{filePath}</Text>
        </View>: null}
        <View style={[Styles.mv_2, Styles.fd_row]}>
          <View style={[Styles.gridSection]}>
            <TouchableOpacity onPress={onRecord}>
              <View style={[buttonStyles.btn_transparent]}>
                <Text style={[buttonStyles.btn_transparent_text, Styles.color_black]}>
                  Record
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[Styles.gridSection]}>
            <TouchableOpacity onPress={onPlay}>
              <View style={[buttonStyles.btn_transparent]}>
                <Text style={[buttonStyles.btn_transparent_text, Styles.color_black]}>
                  Play
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[Styles.mv_2]}>
          <TouchableOpacity>
            <View style={[buttonStyles.btnContainer]}>
              <Text style={[buttonStyles.btn_text]}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </MenuProvider>
  );
};

export default Queries;
