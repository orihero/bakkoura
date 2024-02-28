import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  bts: {
    position: 'absolute',
  },
  timerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
  },
  soundList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#202B35',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  sound: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
