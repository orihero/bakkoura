import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {COLORS} from '../../utils/colors';

type Props = {
  placeholder: string;
  value?: any;
  onChangeText?: (e) => void;
};

const Input: React.FC<Props> = ({placeholder, value, onChangeText}) => {
  return (
    <TextInput
      placeholderTextColor={COLORS.grey}
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}></TextInput>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    color: '#fff',
    backgroundColor: '#0D0D0D',
    borderRadius: 30,
    width: '100%',
    // borderTopWidth: 0.5,
    // borderLeftWidth: 0.5,
    // borderRightWidth: 0.5,
    // borderTopColor: '#394A5C',
  },
});
