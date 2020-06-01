import React, {useState} from 'react';
import {RNVoiceRecorder} from 'react-native-voice-recorder';
import { TouchableOpacity , View, Text} from 'react-native';
let recordingPath;

const VoiceRecord = () => {
  const [visible, isVisible] = useState(false);

  const onRecord = () => {
    RNVoiceRecorder.Record({
      format: 'wav',
      onDone: path => {
        console.log('record done: ' + path);

        recordingPath = path;
      },
      onCancel: () => {
        console.log('on cancel');
      },
    });
  };


  const onPlay =()=> {
    RNVoiceRecorder.Play({
      path: recordingPath,
      format: "wav",
      onDone: path => {
        console.log("play done: " + path);
      },
      onCancel: () => {
        console.log("play cancelled");
      }
    });
  }

  return (
    <View>
      <TouchableOpacity onPress={onRecord}>
          <Text>Records</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlay}>
          <Text>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VoiceRecord;
