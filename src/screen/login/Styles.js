import {StyleSheet} from 'react-native';
import {flexVariable} from '../../styleSheet/flexVariable';
import {
  responsiveHorizontalSize,
  responsiveVerticalSize,
  heightPercentageToDP,
  responsiveFontSize,
} from '../../styleSheet/responsiveSize';
import colors from '../../styleSheet/color';
import {fontFamily} from '../../styleSheet/fonts';

const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: flexVariable.center,
    alignContent: flexVariable.center,
    height: heightPercentageToDP(100 - 4),
  },
  pv_2: {
    paddingVertical: responsiveVerticalSize(2),
  },
  pv_4:{
    paddingVertical: responsiveVerticalSize(4),
  },
  pb_2: {
    paddingBottom: responsiveVerticalSize(2),
  },
  ph_2:{
    paddingHorizontal: responsiveHorizontalSize(4),
  },
  flex_1: {
    flex: 1,
  },
  logo_container: {
    flexDirection: flexVariable.row,
    justifyContent: flexVariable.center,
  },
  logo: {
    width: 120,
    height: 120,
    //borderRadius: 120 / 2,
    //borderWidth: 1,
    //borderColor: colors.blue,
    marginVertical: responsiveVerticalSize(0.35),
  },
  text:{ 
    textDecorationLine: flexVariable.underline,
    fontFamily: fontFamily.segoeuiSemiBold,
    color: colors.suvaGrey,
    fontSize: responsiveFontSize(14)
  },
  txt_right:{
    textAlign: flexVariable.right,
  },
  footer_text:{
    fontSize: responsiveFontSize(14),
    fontFamily: fontFamily.segoeuiSemiBold,
    textAlign: flexVariable.center
  },
  company_info:{
    position: flexVariable.absolute, 
    bottom: 4, 
    left: 0, 
    right: 0, 
    margin: flexVariable.auto
  },
  logo_color:{
    fontSize: responsiveFontSize(16),
    color: colors.blue,
  },
  logo_img: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    resizeMode: 'contain',
 //   objectFit: 'contain'
  }
});

export default Styles;
