import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Linking, Platform} from 'react-native';
import {
  IndicatorViewPager,
  PagerTitleIndicator,
} from 'react-native-best-viewpager';
import {useFocusEffect} from '@react-navigation/native';
import Styles from './Styles';
import GetFilesService from '../../api/Services/getFiles';
import {AppContext} from '../../layout/AppProvider';
import CardView from '../../customComponent/CardView/CardView';
import colors from '../../styleSheet/color';
import Loading from '../../customComponent/loading/Loading';
import AppAsyncStorage from '../../utils/AppAsyncStorage';

const Dashboard = ({navigation}) => {
  const [data, setData] = useState([]);
  const [subjectList, setSubjectList] = useState();
  const [role, setRole] = useState('');
  const [pageList, setPageList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const appContext = React.useContext(AppContext);

  useEffect(() => {
    getAudioFiles();
   }, [getAudioFiles]);

  useFocusEffect(
    React.useCallback(() => {
      getAudioFiles();
    }, [getAudioFiles]),
  );

  const getAudioFiles = async () => {
    console.log('calling');
    const role = await AppAsyncStorage.get('role');
    const mobile = await AppAsyncStorage.get('mobile');

    const data = {
      mobile: mobile,
      role: role,
    };

    await GetFilesService.getFilesList(data).then(async result => {
      if (result.status === 200) {
        try {
          if (result.data.statusCode === 1) {
            let tabArray = [];
            let tabData = [];
            if (result.data.data.length > 0) {
              result.data.data.map(item => {
                Object.keys(item).map(function(k) {
                  console.log('key with value: ' + k);
                  tabArray.push(k);
                  tabData.push(item[k]);
                });
              });
            }
            await setData(tabData);
            await setPageList([...tabArray]);
            await setIsLoading(true);
            await setRole(role)
          }
        } catch (error) {
          console.log('error', error);
          setIsLoading(true);
        }
      } else {
        console.log('Network failed');
        setIsLoading(true);
      }
    });
  };

  const dialCall = number => {
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
    return (
      <PagerTitleIndicator
        titles={pageList}
        itemTextStyle={[Styles.item_title]}
        selectedBorderStyle={[Styles.bg_themeColor]}
        trackScroll={true}
        changePageWithAnimation={true}
        selectedItemTextStyle={[Styles.active_item]}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      {data.length > 0 ? (
        <IndicatorViewPager
          style={[Styles.title_indicator]}
          indicator={_renderTitleIndicator()}>
          {data.map((item, index) => (
            <View>
              <CardView
                data={item}
                dialCall={number => dialCall(number)}
                navigation={navigation}
                subjectList={subjectList}
                role={role}
              />
            </View>
          ))}
        </IndicatorViewPager>
      ) : (
        <View style={[Styles.viewContainer]}>
          <Text>No record found</Text>
        </View>
      )}
    </View>
  );
};

export default Dashboard;
