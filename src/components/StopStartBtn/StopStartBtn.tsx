import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Images} from '../../assets/index';

type componentNameProps = {
  text?: string;
  primary?: boolean;
};

const StartBtn = (props: componentNameProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      {props.primary ? (
        <>
          <Images.Svg.subtrack style={styles.subtrack} width={90} />
          <Images.Svg.ellipse style={styles.ellipse} width={75} />
        </>
      ) : (
        <>
          <Images.Svg.subtrackOut style={styles.subtrack} width={90} />
          <Images.Svg.ellipseOut style={styles.ellipse} width={75} />
        </>
      )}
      <Text style={props.primary ? styles.primaryText : styles.outlineText}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default StartBtn;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtrack: {
    position: 'absolute',
  },
  ellipse: {},
  primaryText: {
    position: 'absolute',
    fontSize: 16,
    color: '#000',
  },
  outlineText: {
    position: 'absolute',
    color: '#fff',
    fontSize: 16,
  },
});
