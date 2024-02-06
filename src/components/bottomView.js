import React from 'react';
import {View, StyleSheet, Pressable,} from 'react-native';
import colors from '../colors';
import {TRAINGLE_SIZE} from '../constants';

const BottomView = ({open, toggleOpen, children}) => {
  return (
    <View style={styles.bottomContainer}>
      <Pressable onPress={toggleOpen}>
        <View style={[styles.triangle, !open && styles.invert]} />
      </Pressable>
      {children}
    </View>
  );
};

export default BottomView;
const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.WHITE,
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    paddingBottom: 30,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: TRAINGLE_SIZE,
    borderRightWidth: TRAINGLE_SIZE,
    borderBottomWidth: TRAINGLE_SIZE * 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.LIGHT_PURPLE,
    alignSelf: 'center',
  },
  invert: {
    transform: [{rotate: '180deg'}],
  },
});
