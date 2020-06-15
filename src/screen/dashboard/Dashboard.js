import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Linking, Platform, Alert} from 'react-native';
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
import {statusData, studentStatusDropdownData} from '../../utils/DropdownData';
import ConfirmationDialog from '../../customComponent/CustomDialog/ConfirmationDialog';

const Dashboard = ({navigation}) => {
  const [data, setData] = useState([]);
  const [subjectList, setSubjectList] = useState();
  const [role, setRole] = useState('');
  const [pageList, setPageList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [statusList, setStatusList] = useState(statusData);
  const [isModal, setIsModal] = useState(false);
  data;
  const [status, setStatus] = useState('');
  const [item, setItem] = useState('');

  const appContext = React.useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      getAudioFiles();
    }, 400);
  }, [getAudioFiles]);

  useFocusEffect(
    React.useCallback(() => {
      getAudioFiles();
    }, [getAudioFiles]),
  );

  const getAudioFiles = async () => {
    setIsLoading(true);
    const role = await AppAsyncStorage.get('role');
    const mobile = await AppAsyncStorage.get('mobile');
    if (role !== '' && mobile !== '') {
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
                    tabArray.push(k);
                    tabData.push(item[k]);
                  });
                });
                await setData(tabData);
                await setPageList([...tabArray]);
                await setIsLoading(true);
                await setRole(role);
                setIsLoading(false);
              }
            } else {
              await setData([]);
              await setPageList([]);
              await setIsLoading(true);
              await setRole(role);
              setIsLoading(false);
            }
          } catch (error) {
            console.log('error', error);
            setIsLoading(false);
          }
        } else {
          console.log('Network failed');
          setIsLoading(false);
        }
      });
    } else {
      setIsLoading(false);
    }
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

  const handleStatus = async (item, status) => {
    const data = {
      mobile: item.mobile,
      recId: item.rec_id,
      status: status,
    };
    await GetFilesService.updateStatus(data).then(async result => {
      if (result.status === 200) {
        try {
          if (result.data.statusCode === 1) {
            await getAudioFiles();
            Alert.alert(
              `${
                status === 'DELETE'
                  ? 'Deleted successfully'
                  : 'status updated successfully'
              }`,
            );
          }
        } catch (error) {
          console.log('error', error);
        }
      } else {
        console.log('Network failed');
      }
    });
  };

  const handleStatusSelect = (item, name) => {
    console.log('name', name);
    setIsModal(true);
    setStatus(name);
    setItem(item);
  };

  const closeDialog = () => {
    setIsModal(false);
  };

  const confirmDialog = async () => {
    setIsModal(false);
    await handleStatus(item, status);
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
                itemSatus={(item, status) => handleStatus(item, status)}
                handleStatusSelect={(item, name) =>
                  handleStatusSelect(item, name)
                }
                statusData={
                  role === 'Tutor' ? statusList : studentStatusDropdownData
                }
                role={role}
              />
            </View>
          ))}
        </IndicatorViewPager>
      ) : (
        <View style={[Styles.viewContainer]}>
          {isLoading ? <Loading /> : <Text>No record found</Text>}
        </View>
      )}
      {isModal ? (
        <ConfirmationDialog
          isShow={true}
          closeDialog={closeDialog}
          confirmDialog={confirmDialog}
          cancelDialog={closeDialog}
        />
      ) : null}
    </View>
  );
};

export default Dashboard;
