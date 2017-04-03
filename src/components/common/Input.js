import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const { inputStyle, labelStyle, containerStyle } = Styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder ={placeholder}
        autoComplete={false}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const Styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 5
  },
  containerStyle: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { Input };