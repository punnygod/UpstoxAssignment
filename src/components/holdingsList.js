import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import HoldingCard from './holdingCard';
import colors from '../colors';

const HoldingsList = ({holdings}) => {
  return (
    <View style={styles.holdingListContainer}>
      <FlatList
        data={holdings}
        keyExtractor={item => item.symbol}
        renderItem={({item}) => <HoldingCard data={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default HoldingsList;
const styles = StyleSheet.create({
  separator: {
    borderBottomColor: colors.GREY,
    borderBottomWidth: 1,
    width: '98%',
  },
  holdingListContainer: {
    paddingHorizontal: 12,
    backgroundColor: colors.WHITE,
  },
});
