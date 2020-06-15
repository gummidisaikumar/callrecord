import {StyleSheet} from 'react-native';
import colors from '../../styleSheet/color';
import {flexVariable} from '../../styleSheet/flexVariable';
import {fontFamily} from '../../styleSheet/fonts';
import {
  heightPercentageToDP,
  widthPercentageToDP,
  responsiveFontSize,
  responsiveHorizontalSize,
  responsiveVerticalSize,
} from '../../styleSheet/responsiveSize';

const customDialogStyle = StyleSheet.create({
  dialogContainer: {
    backgroundColor: colors.white,
    // minHeight: heightPercentageToDP(35),
    justifyContent: flexVariable.center,
    alignItems: flexVariable.center,
  },
  dialogViewContainer: {
    flexDirection: flexVariable.row,
    alignItems: flexVariable.center,
    justifyContent: flexVariable.spaceAround,
  },
  dialogPosition: {
    flexDirection: flexVariable.column,
    justifyContent: flexVariable.center,
    alignItems: flexVariable.center,
  },
  dialogTitle: {
    fontFamily: fontFamily.segoeuiSemiBold,
    fontSize: responsiveFontSize(20),
    textAlign: flexVariable.center,
    paddingVertical: '1%',
  },
  imgBgContainer: {
    backgroundColor: colors.themeColor,
    borderRadius: heightPercentageToDP(18) / 2,
    padding: 10,
    height: heightPercentageToDP(18),
    width: heightPercentageToDP(18),
    justifyContent: flexVariable.center,
    alignItems: flexVariable.center,
  },
  dialogWidthContainer: {
    width: widthPercentageToDP(90),
  },
  confirmContainer: {
    flexDirection: flexVariable.column,
  },
  confirmText: {
    fontSize: responsiveFontSize(18),
    fontWeight: flexVariable.bold,
    fontFamily: fontFamily.opensansSemiBold,
    color: colors.black,
    paddingHorizontal: responsiveHorizontalSize(2),
    textAlign: flexVariable.center,
    paddingVertical: responsiveVerticalSize(4),
  },
  pdtb_0: {
    paddingTop: 0,
    padding: 0,
  },
  flexDirectionRow: {
    flexDirection: flexVariable.row,
  },
  btnText: {
    fontSize: responsiveFontSize(18),
    textAlign: flexVariable.center,
    paddingVertical: responsiveVerticalSize(2.5),
    paddingHorizontal: responsiveHorizontalSize(1),
    fontWeight: flexVariable.bold,
    fontFamily: fontFamily.segoeuiRegular,
  },
  footerPosition: {
    width: widthPercentageToDP(100) / 2 - widthPercentageToDP(5),
  },
  confirmBtn: {
    backgroundColor: colors.themeColor,
    color: colors.white,
  },
  cancelBtn: {
    backgroundColor: colors.lightGrey,
    color: colors.danger,
  },
  br_4: {
    borderRadius: 4,
  },
  flex_row: {
    flexDirection: flexVariable.column,
    alignItems: flexVariable.center,
    justifyContent: flexVariable.center,
  },
  messageText: {
    fontSize: responsiveFontSize(16),
    fontWeight: flexVariable.bold,
    fontFamily: fontFamily.segoeuiRegular,
    color: colors.black,
    paddingHorizontal: responsiveHorizontalSize(2),
    paddingTop: responsiveVerticalSize(2),
    textAlign: flexVariable.center,
  },
  progressBarColor: {
    color: colors.themeColor,
  },
  flexDirection_row: {
    flexDirection: flexVariable.row,
  },
});

export default customDialogStyle;
