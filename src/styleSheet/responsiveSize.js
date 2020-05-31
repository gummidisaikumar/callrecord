import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const responsiveFontSize = fontSize => {
  return PixelRatio.roundToNearestPixel(fontSize / PixelRatio.getFontScale());
};

const normalize = size => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const responsiveVerticalSize = size => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(size);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const responsiveHorizontalSize = size => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemHeight = parseFloat(size);
  return PixelRatio.roundToNearestPixel((screenWidth * elemHeight) / 100);
};

export {
  widthPercentageToDP,
  heightPercentageToDP,
  responsiveFontSize,
  normalize,
  responsiveVerticalSize,
  responsiveHorizontalSize,
};
