import {StyleSheet} from 'react-native';
import {flexVariable} from '../../styleSheet/flexVariable';
import {
  responsiveHorizontalSize,
  responsiveVerticalSize,
  heightPercentageToDP,
  responsiveFontSize,
  widthPercentageToDP,
} from '../../styleSheet/responsiveSize';
import colors from '../../styleSheet/color';
import {fontFamily} from '../../styleSheet/fonts';

const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginHorizontal: responsiveHorizontalSize(4),
    marginVertical: responsiveVerticalSize(4)
  },
  dropdown_container:{
    borderWidth: 1,
    borderColor: colors.dimGrey,
    borderRadius: 4,
    paddingVertical: responsiveHorizontalSize(3.5),
    paddingHorizontal: responsiveVerticalSize(2)
  },
  txt_medium:{
    fontSize: responsiveFontSize(16),
    paddingHorizontal: responsiveHorizontalSize(2)
  },
  text: {
    fontFamily: fontFamily.segoeuiSemiBold,
    color: colors.suvaGrey,
    fontSize: responsiveFontSize(14),
  },
  color_black:{
    color: colors.black
  },
  mv_2:{
    marginVertical: responsiveVerticalSize(2)
  },
  gridSection: {
    width: widthPercentageToDP(100 / 2) - 25,

  },
  audio_file_icon:{
   // flex: 1,
    flexDirection: flexVariable.row,
    justifyContent: flexVariable.center,
    alignItems: flexVariable.center,
    borderWidth: 1,
    paddingHorizontal: responsiveHorizontalSize(3),
    paddingVertical: responsiveVerticalSize(3),
    borderColor: colors.grey,
    borderRadius: 4
  },
  fd_row:{
    flex: 1,
    flexDirection: flexVariable.row,
    justifyContent: flexVariable.center,
  },
  alignItems_center:{
    alignItems: flexVariable.center
  },
  reset:{
   alignItems: flexVariable.flexEnd,
  },
  reset_text:{
   textAlign: flexVariable.left,
   fontFamily: fontFamily.segoeuiSemiBold,
   fontSize: responsiveFontSize(18)
  },
  mb_2:{
    marginBottom: responsiveVerticalSize(2)
  },
  text_large: {
    fontSize: responsiveFontSize(30),
  }

});

export default Styles;
