import React from 'react';
import {
  View,
  Image,
  Text,
  Slider,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';
import application_Constants from '../../application_Constants/application_Constants';
import Styles from './Styles';
import colors from '../../styleSheet/color';

class AudioPlay extends React.Component {
  static navigationOptions = props => ({
    title: props.navigation.state.params.title,
  });

  constructor() {
    super();
    this.state = {
      playState: 'paused', //playing, paused
      playSeconds: 0,
      duration: 0,
    };
    this.sliderEditing = false;
  }

  componentDidMount() {
    this.play();

    this.timeout = setInterval(() => {
      if (
        this.sound &&
        this.sound.isLoaded() &&
        this.state.playState == 'playing' &&
        !this.sliderEditing
      ) {
        this.sound.getCurrentTime((seconds, isPlaying) => {
          this.setState({playSeconds: seconds});
        });
      }
    }, 100);
  }
  componentWillUnmount() {
    if (this.sound) {
      this.sound.release();
      this.sound = null;
    }
    if (this.timeout) {
      clearInterval(this.timeout);
    }
  }

  onSliderEditStart = () => {
    this.sliderEditing = true;
  };
  onSliderEditEnd = () => {
    this.sliderEditing = false;
  };
  onSliderEditing = value => {
    if (this.sound) {
      this.sound.setCurrentTime(value);
      this.setState({playSeconds: value});
    }
  };

  play = async () => {
    if (this.sound) {
      this.sound.play(this.playComplete);
      this.setState({playState: 'playing'});
    } else {
      const base64 = this.props.route.params.base64;
      const name = this.props.route.params.fileName;

      const path = RNFS.CachesDirectoryPath + `/${name}.mp3`;
      // console.log('path', path);
      // if (RNFS.exists(path)) {
      //   console.log('Exitspath', path);
      //   this.playingAudio(path);
      // } else {
      RNFS.writeFile(path, base64, 'base64').then(() => playSound());
      const playSound = () => {
        console.log('newpath', path);
        this.playingAudio(path);
        // };
      };
    }
  };

  playingAudio = path => {
    this.sound = new Sound(path, '', error => {
      if (error) {
        console.log('failed to load the sound', error);
        //  Alert.alert('Notice', 'audio file error. (Error code : 1)');
        this.setState({playState: 'paused'});
      } else {
        this.setState({
          playState: 'playing',
          duration: this.sound.getDuration(),
        });
        this.sound.play(this.playComplete);
      }
    });
  };

  playComplete = success => {
    if (this.sound) {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
        //  Alert.alert('Notice', 'audio file error. (Error code : 2)');
      }
      this.setState({playState: 'paused', playSeconds: 0});
      this.sound.setCurrentTime(0);
    }
  };

  pause = () => {
    if (this.sound) {
      this.sound.pause();
    }

    this.setState({playState: 'paused'});
  };

  jumpPrev15Seconds = () => {
    this.jumpSeconds(-15);
  };
  jumpNext15Seconds = () => {
    this.jumpSeconds(15);
  };
  jumpSeconds = secsDelta => {
    if (this.sound) {
      this.sound.getCurrentTime((secs, isPlaying) => {
        let nextSecs = secs + secsDelta;
        if (nextSecs < 0) nextSecs = 0;
        else if (nextSecs > this.state.duration) nextSecs = this.state.duration;
        this.sound.setCurrentTime(nextSecs);
        this.setState({playSeconds: nextSecs});
      });
    }
  };

  getAudioTimeString(seconds) {
    const h = parseInt(seconds / (60 * 60));
    const m = parseInt((seconds % (60 * 60)) / 60);
    const s = parseInt(seconds % 60);

    return (
      (h < 10 ? '0' + h : h) +
      ':' +
      (m < 10 ? '0' + m : m) +
      ':' +
      (s < 10 ? '0' + s : s)
    );
  }

  render() {
    const currentTimeString = this.getAudioTimeString(this.state.playSeconds);
    const durationString = this.getAudioTimeString(this.state.duration);

    return (
      <View style={[Styles.viewContainer]}>
        <Image
         // source={application_Constants.speaker}
          source={require('../../assets/images/ui_speaker.png')}
          style={[Styles.speaker_icon]}
        />
        <View style={[Styles.skip_contianer]}>
          <TouchableOpacity
            onPress={this.jumpPrev15Seconds}
            style={[Styles.justify_center]}>
            <Image
             // source={application_Constants.playLeft}
              source={require('../../assets/images/ui_playjumpleft.png')}
              style={[Styles.icon_width]}
            />
            <Text style={[Styles.skip_text]}>15</Text>
          </TouchableOpacity>
          {this.state.playState == 'playing' && (
            <TouchableOpacity onPress={this.pause} style={[Styles.mh_3]}>
              <Image
                //source={application_Constants.pause}
                source={require('../../assets/images/ui_pause.png')}
                style={[Styles.icon_width]}
              />
            </TouchableOpacity>
          )}
          {this.state.playState == 'paused' && (
            <TouchableOpacity onPress={this.play} style={[Styles.mh_3]}>
              <Image
               // source={application_Constants.play}
                source={require('../../assets/images/ui_play.png')}
                style={[Styles.icon_width]}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={this.jumpNext15Seconds}
            style={[Styles.justify_center]}>
            <Image
             // source={application_Constants.playRight}
              source={require('../../assets/images/ui_playjumpright.png')}
              style={[Styles.icon_width]}
            />
            <Text style={[Styles.skip_text]}>15</Text>
          </TouchableOpacity>
        </View>
        <View style={[Styles.slider_container]}>
          <Text style={[Styles.duration_text]}>{currentTimeString}</Text>
          <Slider
            onTouchStart={this.onSliderEditStart}
            // onTouchMove={() => console.log('onTouchMove')}
            onTouchEnd={this.onSliderEditEnd}
            // onTouchEndCapture={() => console.log('onTouchEndCapture')}
            // onTouchCancel={() => console.log('onTouchCancel')}
            onValueChange={this.onSliderEditing}
            value={this.state.playSeconds}
            maximumValue={this.state.duration}
            maximumTrackTintColor={colors.dimGrey}
            minimumTrackTintColor={colors.white}
            thumbTintColor={colors.white}
            style={[Styles.slider_position]}
          />
          <Text style={[Styles.duration_text]}>{durationString}</Text>
        </View>
      </View>
    );
  }
}

export default AudioPlay;
