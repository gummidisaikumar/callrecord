import {StyleSheet} from 'react-native';
import {flexVariable} from '../../styleSheet/flexVariable';
import {
  heightPercentageToDP,
} from '../../styleSheet/responsiveSize';
import colors from '../../styleSheet/color';

const Styles = StyleSheet.create({
  progressBarContainer: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    flexDirection: flexVariable.row,
    height: heightPercentageToDP(100),
  },
  progressBarColor: {
    color: colors.themeColor,
  },
});

export default Styles;
