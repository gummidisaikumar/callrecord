import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';
import Styles from './Styles';
import colors from '../../styleSheet/color';

const CustomInput = props => {
  return (
    <View>
      <View
        style={[
          Styles.inputViewContainer,
          props.isLabel && props.isInputLabel
            ? Styles.border_1
            : Styles.border_0,
          props.errorStatus && props.isInputLabel
            ? Styles.borderColorRed
            : null,
          props.stylesContainer,
        ]}>
        {props.isLabel ? (
          <View style={[Styles.labelwidth]}>
            <Text
              style={[
                Styles.label,
                props.errorStatus ? Styles.errorMessage : '',
                props.labelPosition,
              ]}>
              {props.label}
            </Text>
          </View>
        ) : null}
        <View
          style={[
            props.isLabel ? Styles.textWidth : Styles.fullWidth,
            props.styleTextInput,
          ]}>
          <TextInput
            clearTextOnFocus={false}
            selectionColor={colors.grey}
            style={[
              props.isInputLabel ? Styles.border_0 : Styles.border_1,
              Styles.inputContainer,
              props.textLineStyle ? props.textLineStyle : null,
              (props.isLabel && !props.isInputLabel) ||
              (!props.isLabel && !props.isInputLabel)
                ? Styles.border_1
                : Styles.border_0,
              props.errorStatus ? Styles.borderColorRed : '',
              props.isLabel && props.isInputLabel ? Styles.textAlignRight : '',
              props.ismultiline ? Styles.textAlignTop : Styles.textAlignCenter,
            ]}
            editable={props.editable}
            placeholder={props.placeholder}
            autoFocus={props.isAutoFocus}
            autoCorrect={false}
            placeholderTextColor={props.placeholderTextColor}
            placeholderStyle={Styles.fw_normal}
            onChangeText={text => props.onChangeText(text)}
            value={props.value}
            {...props.inputProps}
            textLineStyle={props.extLineStyle}
            numberOfLines={props.numberOfLines}
            maxLength={props.maxLength}
            minLength={props.minLength}
          />
          {props.errorStatus && !props.isInputLabel ? (
            <Text style={[Styles.errorMessage]}>{props.errorMessage}</Text>
          ) : null}
        </View>
      </View>
      {props.errorStatus && props.isInputLabel ? (
        <View>
          <Text
            style={[
              Styles.errorMessage,
              props.errorStatus && props.isInputLabel ? Styles.margin_2 : null,
            ]}>
            {props.errorMessage}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

CustomInput.propTypes = {
  placeholder: PropTypes.string,
  editable: PropTypes.bool,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  successStatus: PropTypes.bool,
  errorStatus: PropTypes.bool,
  errorMessage: PropTypes.string,
  isInputLabel: PropTypes.bool,
  textLineStyle: PropTypes.object,
  numberOfLines: PropTypes.number,
  labelPosition: PropTypes.object,
  isAutoFocus: PropTypes.bool,
  ismultiline: PropTypes.bool,
  stylesContainer: PropTypes.object,
  styleTextInput: PropTypes.object,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
};

CustomInput.defaultProps = {
  placeholder: '',
  editable: true,
  value: '',
  errorStatus: false,
  errorMessage: '',
  isLabel: false,
  isInputLabel: false,
  labelPosition: {},
  isAutoFocus: false,
  ismultiline: false,
  stylesContainer: {},
  styleTextInput: {},
  maxLength: 500,
  minLength: 2,
};

export default CustomInput;
