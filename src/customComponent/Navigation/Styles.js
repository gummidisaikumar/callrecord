import {StyleSheet} from 'react-native';
import {flexVariable} from '../../styleSheet/flexVariable';
import {
  responsiveHorizontalSize,
  responsiveVerticalSize,
  heightPercentageToDP,
  responsiveFontSize,
  widthPercentageToDP,
} from '../../styleSheet/responsiveSize';
import {fontFamily} from '../../styleSheet/fonts';
import colors from '../../styleSheet/color';

const Styles = StyleSheet.create({
 tabs_circle:{
    width: 50,
    height: 50,
    backgroundColor: colors.themeColor,
    marginBottom: responsiveVerticalSize(2),
    borderRadius: 50 / 2,
    alignContent: flexVariable.center,
    alignItems: flexVariable.center,
 }
});

export default Styles;
