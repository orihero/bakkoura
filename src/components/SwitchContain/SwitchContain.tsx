import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import ButtonComp from '../Button/Button';
import RN from '../RN';
type Props = {};

const SwitchContain: React.FC<Props> = ({}) => {
  const [toggle, setToggle] = React.useState(false);
  const translateX = useSharedValue(0);

  let isLeft = true;
  const handlePress = () => {
    if (isLeft) {
      translateX.value = withSpring(0);
    } else {
      translateX.value = withSpring(20);
    }
    isLeft = !isLeft;
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  return (
    <RN.TouchableOpacity style={styles.container} onPress={handlePress}>
      <RN.View style={[styles.box]}>
        <Animated.View style={[styles.animatedBox, animatedStyles]}>
          <LinearGradient colors={['#ECC271', '#7F642E']} style={styles.linear}>
            <RN.Text style={styles.title}>Back</RN.Text>
          </LinearGradient>
        </Animated.View>
      </RN.View>
    </RN.TouchableOpacity>
  );
};

export default SwitchContain;

const styles = StyleSheet.create({
  container: {
    width: 120,
    marginTop: 50,
  },
  box: {
    backgroundColor: '#121212',
    width: 90,
    height: 22,
    borderRadius: 20,
  },
  animatedBox: {
    position: 'absolute',
  },
  title: {
    width: 'auto',
  },
  linear: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#7F642E',
    borderRadius: 30,
    borderColor: '#ECC271',
    borderWidth: 1,
    width: 70,
    top: -5,
    alignItems: 'center',
  },
});
