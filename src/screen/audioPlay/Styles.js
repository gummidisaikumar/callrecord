import {StyleSheet} from 'react-native';
import {flexVariable} from '../../styleSheet/flexVariable';
import {
  responsiveHorizontalSize,
  responsiveVerticalSize,
  responsiveFontSize,
} from '../../styleSheet/responsiveSize';
import colors from '../../styleSheet/color';
import {fontFamily} from '../../styleSheet/fonts';


const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1, 
    justifyContent: flexVariable.center,
     backgroundColor: colors.themeColor,
     opacity: 0.85,
  },
  speaker_icon:{
    width: 150,
    height: 150,
    marginBottom: responsiveVerticalSize(2),
    alignSelf: flexVariable.center,
  },
  icon_width:{
    width: 35, 
    height: 35,
  },
  skip_contianer:{
    flexDirection: flexVariable.row,
    justifyContent: flexVariable.center,
    marginVertical: responsiveVerticalSize(2),
  },
  justify_center:{
      justifyContent:flexVariable.center
  },
  duration_text:{
    color: colors.white,
    fontSize: responsiveFontSize(16),
    fontFamily: fontFamily.segoeuiSemiBold, 
    alignSelf: flexVariable.center,
  },
  slider_container:{
    marginVertical: responsiveVerticalSize(4),
    marginHorizontal: responsiveHorizontalSize(4),
    flexDirection: flexVariable.row,
  },
  slider_position:{
    flex: 1,
    alignSelf: flexVariable.center,
    marginHorizontal: Platform.select({ios: 5}),
  },
  skip_text:{
    position: flexVariable.absolute,
    alignSelf: flexVariable.center,
    marginTop: 1,
    color: colors.white,
    fontFamily: fontFamily.segoeuiSemiBold,
    fontSize: responsiveFontSize(14),
  },
  mh_3:{
      marginHorizontal: responsiveHorizontalSize(3)
  }
});

export default Styles;
