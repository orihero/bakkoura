import * as React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import {BG, Images} from '../../assets';
import SwitchBtn from '../../components/SwitchBtn/SwitchBtn';
import {styles} from './TimerScreenStyles';
import {LinearGradient} from 'react-native-linear-gradient';
import TextView from '../../components/Text/Text';
import TimerComponent from './Components/TimerComponent';
import RN from '../../components/RN';
import SwitchContain from '../../components/SwitchContain/SwitchContain';

const TimerScreen = () => {
  return (
    <LinearGradient
      colors={['#323D45', '#1B2024', '#0C0C0C']}
      style={styles.linear}>
      <RN.View style={styles.container}>
        <RN.View style={styles.header}>
          <RN.View style={styles.bts}>
            <Images.Svg.btsRightLinear width={80} />
          </RN.View>
          <TextView title="Timer" />
        </RN.View>
        <RN.View style={styles.timerContent}>
          <TimerComponent />
          <SwitchContain />
          <SwitchBtn title="Work" icon={<Images.Svg.sendIcon />} />
        </RN.View>
        <RN.TouchableOpacity style={styles.soundList}>
          <RN.Text color="#fff">Sound</RN.Text>
          <RN.View style={styles.sound}>
            <RN.Text color="#2F4252">Ocean</RN.Text>
            <Images.Svg.arrowRight />
          </RN.View>
        </RN.TouchableOpacity>
      </RN.View>
    </LinearGradient>
  );
};

export default TimerScreen;
