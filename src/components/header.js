import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../colors';

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  headerContainer: {
    padding:10,
    backgroundColor:colors.PURPLE
  },
  headerText:{
    fontSize:16,
    color:colors.WHITE,
    fontWeight:'600'
  }
});
