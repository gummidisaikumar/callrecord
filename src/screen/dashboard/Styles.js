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
  title_indicator:{
    flex: 1, 
    paddingTop: 0, 
    marginTop: 0,
    backgroundColor: colors.white,  
    flexDirection: flexVariable.columnReverse,
  },
  viewContainer: {
    marginHorizontal: responsiveHorizontalSize(4),
    marginVertical: responsiveVerticalSize(2),
    flex: 1,
  },
  pv_1: {
    paddingVertical: responsiveVerticalSize(1),
  },
  pv_4: {
    paddingVertical: responsiveVerticalSize(4),
  },
  pb_2: {
    paddingBottom: responsiveVerticalSize(2),
  },
  mb_2: {
    marginBottom: responsiveVerticalSize(2),
  },
  ph_2: {
    paddingHorizontal: responsiveHorizontalSize(2),
  },
  pl_2:{
    paddingLeft: responsiveHorizontalSize(2)
  },
  pt_1:{
    paddingTop: responsiveHorizontalSize(1.25)
  },
  flex_1: {
    flex: 1,
  },
  title_text: {
    fontFamily: fontFamily.segoeuiSemiBold,
    color: colors.suvaGrey,
    fontSize: responsiveFontSize(18),
  },
  txt_right: {
    textAlign: flexVariable.right,
  },
  footer_text: {
    fontSize: responsiveFontSize(14),
    fontFamily: fontFamily.segoeuiSemiBold,
    textAlign: flexVariable.center,
  },
  listContatiner: {
    marginHorizontal: responsiveHorizontalSize(0.5),
    //marginBottom: heightPercentageToDP(1.5)
  },

  card_container: {
    marginBottom: responsiveVerticalSize(1),
  },
  boxShadow: {
    paddingVertical: responsiveVerticalSize(0.75),
    borderColor: colors.grey,
    shadowColor: colors.grey,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: colors.lightGrey,
  },
  fd_row: {
    flexDirection: flexVariable.row,
    //alignItems: flexVariable.center
  },
  text: {
    fontFamily: fontFamily.segoeuiSemiBold,
    color: colors.suvaGrey,
    fontSize: responsiveFontSize(12),
  },
  gridSection: {
    width: widthPercentageToDP(100 / 2),
  },
  phone_position: {
    flex: 1,
    justifyContent: flexVariable.flexEnd,
    flexDirection: flexVariable.row,
  },
  play_container:{
    borderColor: colors.themeColor,
    backgroundColor: colors.lightGrey,
  },
  circle_container:{
    alignContent: flexVariable.center,
    justifyContent: flexVariable.center,
    alignItems: flexVariable.center,
    width: 40,
    height: 40,
   // borderWidth: 2,
    borderRadius: 40 / 2,
  },
  phone_circle:{
    width: 30,
    height: 30,
    borderWidth: 2,
    borderRadius: 30 / 2,
  },
  phone_container: {
    borderColor: colors.green,
    backgroundColor: colors.green,
  },
  file_text: {
    fontSize: responsiveFontSize(16),
    fontFamily: fontFamily.segoeuiSemiBold,
  //  backgroundColor:'red',
  },
  completed_status:{
    borderColor: colors.green,
    backgroundColor: colors.lightGrey,
  },
  pending_status:{ 
    borderColor: colors.grey,
    backgroundColor: colors.lightGrey,
  },
  status_txt:{
    fontFamily: fontFamily.segoeuiSemiBold,
    fontSize: responsiveFontSize(12),
    textTransform: flexVariable.capitalize,
  },
  grey_color:{
    fontSize: responsiveFontSize(12),
    color:colors.themeColor,
    fontFamily: fontFamily.segoeuiSemiBold,
  },
  color_grey:{
    color: colors.dimGrey,
  },
  color_green:{
    color: colors.green,
  },
  dots:{
    flexDirection: flexVariable.row,
    justifyContent: flexVariable.flexEnd, 
    paddingHorizontal: responsiveHorizontalSize(2),
    paddingVertical: responsiveVerticalSize(1),
   //backgroundColor: 'red',
  },
  border_width_1:{
    borderWidth:1,
  },
  border_width_2:{
    borderWidth:2,
  },
  alignItems_center: {
    alignItems: flexVariable.center
  },
  color_black:{
    color: colors.black
  },
  color_white:{
    color: colors.white
  },
  txt_medium:{
    fontSize: responsiveFontSize(14),
    paddingHorizontal: responsiveHorizontalSize(2)
  },
  item_title:{
    fontFamily: fontFamily.segoeuiRegular,
    fontSize: responsiveFontSize(15),
  },
  active_item:{
    color: colors.themeColor,
    fontFamily: fontFamily.segoeuiBold,
    fontSize: responsiveFontSize(14),
  },
  bg_themeColor:{
    backgroundColor: colors.themeColor
  },
  noc_status: {
    borderRightWidth: 3,
    borderRightColor: colors.grey,
  },
  progress: {
    borderRightWidth: 3,
    borderRightColor: colors.salmonred,
  },
  complete:{
    borderRightWidth: 3,
    borderRightColor: colors.green,
  },
  menu_options:{
    backgroundColor:colors.themeColor,
    paddingVertical: responsiveVerticalSize(0.5),
  }
});

export default Styles;
