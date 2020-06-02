import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Linking, Platform} from 'react-native';
import {
  IndicatorViewPager,
  PagerTitleIndicator,
} from 'react-native-best-viewpager';
import Styles from './Styles';
import GetFilesService from '../../api/Services/getFiles';
import {AppContext} from '../../layout/AppProvider';
import CardView from '../../customComponent/CardView/CardView';
import colors from '../../styleSheet/color';

const Dashboard = ({navigation}) => {
  const [data, setData] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const [pageList,setPageList] = useState([]);
  const appContext = React.useContext(AppContext);

  useEffect(() => {
    getAudioFiles();
    setSubjectList(appContext.state.subjects);
    let pageTitles;
    if (appContext.state.subjects) {
      pageTitles = appContext.state.subjects.map(item => item.subj_name);
    }
    setPageList(["All", ...pageTitles]);
  }, [getAudioFiles]);
  

  const getAudioFiles = async () => {
    await GetFilesService.getFilesList().then(async result => {
      if (result.status === 200) {
        try {
          await setData(result.data);
        } catch (error) {
          console.log('error', error);
        }
      } else {
        console.log('Network failed');
      }
    });
  };

  const dialCall = number => {
    console.log(number);
    let phoneNumber = '';
    if (number) {
      if (Platform.OS === 'android') {
        phoneNumber = `tel:+91${number}`;
      } else {
        phoneNumber = `telprompt:+91${number}`;
      }
      Linking.openURL(phoneNumber);
    }
  };

  const _renderTitleIndicator = () => {
    return <PagerTitleIndicator titles={pageList} 
    itemTextStyle={[Styles.item_title]} 
    selectedBorderStyle={[Styles.bg_themeColor]}
    trackScroll={true}
    changePageWithAnimation={true}
    selectedItemTextStyle={[Styles.active_item]}/>;
  };

  return (
    <View style={{flex: 1}}>
      <IndicatorViewPager
        style={[Styles.title_indicator]}
        indicator={_renderTitleIndicator()}>
        {pageList.map((item, index) => (
          <View>
            <CardView
              data={data}
              dialCall={number => dialCall(number)}
              navigation={navigation}
              subjectList={subjectList}
            />
          </View>
        ))}
      </IndicatorViewPager>
    </View>
  );
};

export default Dashboard;
