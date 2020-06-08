import {StyleSheet} from 'react-native';
import {flexVariable} from './flexVariable';
import {
  responsiveHorizontalSize,
  responsiveVerticalSize,
  responsiveFontSize,
} from './responsiveSize';
import {fontFamily} from './fonts';
import colors from './color';

const Styles = StyleSheet.create({
  btnContainer: {
    flexDirection: flexVariable.column,
    alignItems: flexVariable.center,
    paddingHorizontal: responsiveHorizontalSize(4),
    paddingVertical: responsiveVerticalSize(2),
    borderRadius: responsiveHorizontalSize(1),
    borderWidth: responsiveFontSize(1),
    backgroundColor: colors.themeColor,
    borderColor: colors.themeColor,
  },
  btnPosition: {
   marginHorizontal: responsiveHorizontalSize(3),
   marginVertical: responsiveVerticalSize(2),
  },
  btn_text: {
    fontFamily: fontFamily.segoeuiSemiBold,
    fontSize: responsiveFontSize(20),
    color: colors.white,
    letterSpacing: responsiveFontSize(0.5)
  },
  btn_small_Container: {
    flexDirection: flexVariable.row,
    alignItems: flexVariable.center,
    paddingHorizontal: responsiveHorizontalSize(1.25),
    paddingVertical: responsiveVerticalSize(0.65),
    borderRadius: responsiveHorizontalSize(1),
    borderWidth: responsiveFontSize(1),
    backgroundColor: colors.themeColor,
    borderColor: colors.themeColor,
    marginTop: responsiveVerticalSize(0.5),
    
  },
  btn_small_text: {
    fontFamily: fontFamily.segoeuiSemiBold,
    fontSize: responsiveFontSize(10),
    color: colors.white,
    letterSpacing: responsiveFontSize(0.5)
  },
  btn_transparent: {
    flexDirection: flexVariable.column,
    alignItems: flexVariable.center,
    paddingHorizontal: responsiveHorizontalSize(1.5),
    paddingVertical: responsiveVerticalSize(1.5),
    borderRadius: responsiveHorizontalSize(1),
    borderWidth: responsiveFontSize(1),
    backgroundColor: colors.transparent,
    borderColor: colors.themeColor,
  },
  btn_transparent_text:{
    fontFamily: fontFamily.segoeuiSemiBold,
    fontSize: responsiveFontSize(16),
    color: colors.white,
    letterSpacing: responsiveFontSize(0.5)
  },
  disabledBtn: {
    backgroundColor: colors.dimGrey,
  },
});

export default Styles;
