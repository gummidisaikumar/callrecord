import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Dialog} from 'react-native-simple-dialogs';
import styles from './customDialogStyle';

const ConfirmationDialog = props => {
  return (
    <Dialog
      visible={props.isShow}
      title=""
      contentStyle={[styles.pdtb_0]}
      onRequestClose={props.cancelDialog}
      dialogStyle={[styles.dialogViewContainer, styles.dialogWidthContainer]}>
      <View style={[styles.confirmContainer]}>
        <View>
          <Text style={[styles.confirmText]}>
            Your status is not saved, do you want to continue?
          </Text>
        </View>
        <View style={[styles.flexDirectionRow]}>
          <TouchableOpacity onPress={props.cancelDialog}>
            <View style={[styles.footerPosition]}>
              <Text style={[styles.btnText, styles.cancelBtn]}>Cancel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.confirmDialog}>
            <View style={[styles.footerPosition]}>
              <Text style={[styles.btnText, styles.confirmBtn]}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Dialog>
  );
};

export default ConfirmationDialog;
