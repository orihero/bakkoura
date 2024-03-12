import React from 'react';
import {StyleSheet} from 'react-native';
import {Images} from '../../assets';
import useRootStore from '../../hooks/useRootStore';
import {SoundsData} from '../../utils/sounds';
import HeaderContent from '../HeaderContent/HeaderContent';
import LinearContainer from '../LinearContainer/LinearContainer';
import RN from '../RN';

type Props = {
  modalVisible?: boolean;
  headerLeftItem?: React.ReactNode;
  headerRightItem?: React.ReactNode;
  headerTitle?: string;
  onClose?: () => void;
  onSelect?: () => void;
  data?: any[];
  onItemPress?: () => void;
};

const Item = ({data, title, active, index, onPress}) => (
  <RN.TouchableOpacity
    style={[
      styles.item,
      {borderBottomWidth: index === data.length - 1 ? 0 : 1},
    ]}
    onPress={() => onPress(index)}>
    <RN.Text style={[styles.title, {color: active ? '#fff' : '#7D7D7D'}]}>
      {title}
    </RN.Text>
    <RN.TouchableOpacity style={styles.radioBtn} onPress={() => onPress(index)}>
      {active ? (
        <Images.Svg.ellipseSmall
          style={styles.activeRadio}
          width={15}
          height={15}
        />
      ) : null}
    </RN.TouchableOpacity>
  </RN.TouchableOpacity>
);

const SoundsContent: React.FC<Props> = ({
  modalVisible,
  onClose,
  headerLeftItem,
  headerRightItem,
  headerTitle,
  data,
  onItemPress,
}) => {
  return (
    <RN.Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClose}>
      <LinearContainer
        children={
          <RN.View style={styles.centeredView}>
            <RN.View style={styles.modalView}>
              <HeaderContent
                title={headerTitle}
                leftItem={headerLeftItem}
                rightItem={
                  <RN.TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={onClose}>
                    <RN.Text style={styles.cancelTxt}>Cancel</RN.Text>
                  </RN.TouchableOpacity>
                }
              />
              <RN.View style={styles.listsBox}>
                <RN.FlatList
                  data={data}
                  renderItem={({item, index}) => (
                    <Item
                      data={data}
                      title={item.title}
                      active={item.active}
                      index={index}
                      onPress={onItemPress}
                    />
                  )}
                />
              </RN.View>
            </RN.View>
          </RN.View>
        }
      />
    </RN.Modal>
  );
};

export default SoundsContent;

const styles = RN.StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  cancelBtn: {
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  cancelTxt: {
    color: '#656E77',
    fontSize: 16,
  },
  listsBox: {
    width: '100%',
    padding: 10,
    backgroundColor: '#0D0D0D',
    borderRadius: 6,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#131F28',
  },
  radioBtn: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#7D7D7D',
    fontSize: 16,
  },
  activeRadio: {
    borderWidth: 1,
    borderColor: '#ECC271',
    borderRadius: 10,
  },
});
