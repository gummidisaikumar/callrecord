import {StyleSheet, BackHandler} from 'react-native';
import {flexVariable} from '../../styleSheet/flexVariable';
import {
  responsiveHorizontalSize,
  responsiveVerticalSize,
  responsiveFontSize,
  widthPercentageToDP,
} from '../../styleSheet/responsiveSize';
import colors from '../../styleSheet/color';
import {fontFamily} from '../../styleSheet/fonts';

const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginHorizontal: responsiveHorizontalSize(4),
    marginVertical: responsiveVerticalSize(2),
    //,
  },
  profile_container: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 2,
    borderColor: colors.themeColor,
  },
  profile_position:{
    flexDirection: flexVariable.row,
    justifyContent: flexVariable.center,
    paddingVertical: responsiveVerticalSize(3),
  },
  icon_position:{
      flex: 1,
      alignItems: flexVariable.center,
      justifyContent: flexVariable.center,
  },
  fd_row: {
      flexDirection: flexVariable.row,
      alignItems: 'center'
     // backgroundColor: 'red',
  },
  grid_two: {
    width: widthPercentageToDP(100 / 2),
    paddingVertical: responsiveVerticalSize(1)
  },
  txt_right:{
      textAlign: flexVariable.right,
  },
  title_txt:{
    fontSize: responsiveFontSize(18),
    fontFamily: fontFamily.segoeuiSemiBold,
    color: colors.black,
  },
  pl_2:{
    paddingLeft: responsiveVerticalSize(2)
  }
});

export default Styles;
