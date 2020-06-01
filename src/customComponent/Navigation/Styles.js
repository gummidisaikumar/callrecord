import {StyleSheet} from 'react-native';
import {flexVariable} from '../../styleSheet/flexVariable';
import {
  responsiveVerticalSize,
} from '../../styleSheet/responsiveSize';
import colors from '../../styleSheet/color';

const Styles = StyleSheet.create({
 tabs_circle:{
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    marginBottom: responsiveVerticalSize(4),
    borderRadius: 50 / 2,
    justifyContent: flexVariable.center,
    alignItems: flexVariable.center,
    borderWidth: 2,
    borderColor: colors.themeColor,
 }
});

export default Styles;
