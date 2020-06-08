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
  viewContainer: {
    flex: 1,
    justifyContent: flexVariable.center,
    // alignContent: flexVariable.center,
    // height: heightPercentageToDP(100 - 4),
  },
  pv_1: {
    paddingVertical: responsiveVerticalSize(1),
  },
  pv_2: {
    paddingVertical: responsiveVerticalSize(1),
  },
  pb_2: {
    paddingBottom: responsiveVerticalSize(2),
  },
  ph_2: {
    paddingHorizontal: responsiveHorizontalSize(4),
  },
  pl_2: {
    paddingLeft: responsiveHorizontalSize(2),
  },
  flex_1: {
    flex: 1,
  },
  fd_row: {
    flexDirection: flexVariable.row,
  },
  alignItems_center:{
      alignItems: flexVariable.center,
  },
  grid_two: {
    width: widthPercentageToDP(100 / 2),
  },
  back_arrow_position: {
    flexDirection: flexVariable.row,
    alignItems: flexVariable.center,
  },
  back_arrow_container: {
    marginHorizontal: responsiveHorizontalSize(4),
    paddingTop: responsiveHorizontalSize(4),
  },
  back_text: {
    fontSize: responsiveFontSize(18),
    fontFamily: fontFamily.segoeuiSemiBold,
  },
  title_container: {
    paddingVertical: responsiveVerticalSize(1),
  },
  title_text: {
    fontSize: responsiveFontSize(28),
    textAlign: flexVariable.center,
    fontFamily: fontFamily.segoeuiSemiBold,
    color: colors.themeColor,
  },
  text: {
    textDecorationLine: flexVariable.underline,
    fontFamily: fontFamily.segoeuiSemiBold,
    color: colors.suvaGrey,
    fontSize: responsiveFontSize(14),
  },
  footer_text: {
    fontSize: responsiveFontSize(14),
    fontFamily: fontFamily.segoeuiSemiBold,
    textAlign: flexVariable.center,
  },
});

export default Styles;
