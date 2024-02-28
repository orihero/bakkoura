import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

type Props = {
  placeholder: string;
};

const Input: React.FC<Props> = ({placeholder}) => {
  return (
    <TextInput
      placeholderTextColor={'#fff'}
      style={styles.input}
      placeholder={placeholder}></TextInput>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    color: '#fff',
    backgroundColor: '#0D0D0D',
    borderRadius: 30,
    width: '100%',
  },
});
