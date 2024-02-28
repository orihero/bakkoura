import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import ButtonComp from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import TextView from '../../../components/Text/Text';
import LinearGradient from 'react-native-linear-gradient';
import {BG, Images} from '../../../assets';
import StartBtn from '../../../components/StopStartBtn/StopStartBtn';

const WelcomeScreen = () => {
  return (
    <LinearGradient
      colors={['#4A5766', '#0D1316']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <View style={styles.light}>
          <Image source={BG.light} />
        </View>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Images.Svg.btsRightLinear width={80} />
          </View>
          <TouchableOpacity style={styles.localize}>
            <Images.Svg.en width={50} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleBox}>
          <TextView title="Hello Friend!" />
          <TextView text="Start tracking and improving Your Live!" />
        </View>
        <View style={styles.formBox}>
          <TextView style={styles.label} text="Login" />
          <Input placeholder="JB" />
          <TextView style={styles.label} text="Password" />
          <Input placeholder="77777" />
        </View>
        <View style={styles.forgotBox}>
          <TouchableOpacity>
            <TextView text="Remember me" />
          </TouchableOpacity>
          <TouchableOpacity>
            <TextView style={styles.forgot} text="Forgot Your Password?" />
          </TouchableOpacity>
        </View>
        <View style={styles.signUp}>
          <ButtonComp title="Sign up" icon={<Images.Svg.eye />} />
        </View>
        <View style={styles.orWithSocial}>
          <TextView text="Or Sign Up using" />
          <View style={styles.socialBox}>
            <TouchableOpacity>
              <Images.Svg.f />
            </TouchableOpacity>
            <TouchableOpacity>
              <Images.Svg.x />
            </TouchableOpacity>
            <TouchableOpacity>
              <Images.Svg.g />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.needAcc}>
          <TextView text="Need un Account?" />
          <TouchableOpacity>
            <TextView style={styles.signUpText} text="Sign Up" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 25,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {},
  localize: {},
  titleBox: {
    marginTop: 50,
    gap: 10,
  },
  light: {
    position: 'absolute',
    // top: 20,
    left: 100,
    transform: [{translateX: -50}],
  },
  formBox: {
    alignItems: 'flex-start',
    gap: 8,
    marginTop: 50,
  },
  label: {
    marginLeft: 20,
  },
  forgotBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  forgot: {
    color: '#ECC271',
  },
  signUp: {
    marginTop: 30,
  },
  orWithSocial: {
    marginTop: 25,
    gap: 15,
  },
  socialBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  needAcc: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
    gap: 10,
    left: '10%',
    right: '10%',
  },
  signUpText: {
    color: '#ECC271',
  },
});
