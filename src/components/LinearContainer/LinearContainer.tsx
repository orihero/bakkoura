import * as React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {};

const LinearContainer: React.FC<Props> = ({}) => {
  return (
    <LinearGradient
      colors={['#4A5766', '#0D1316']}
      style={styles.container}></LinearGradient>
  );
};

export default LinearContainer;

const styles = StyleSheet.create({
  container: {},
});
