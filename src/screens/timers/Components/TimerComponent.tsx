import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RN from '../../../components/RN';

type Props = {};

const TimerComponent: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>TimerComponent</Text>
    </View>
  );
};

export default TimerComponent;

const styles = StyleSheet.create({
  container: {},
});
