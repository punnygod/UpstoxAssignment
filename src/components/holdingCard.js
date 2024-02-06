import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../colors';
import Row from '../styles/Row';
import {CURRENCY} from '../constants';
import { getProfitAndLossPerHolding } from '../utilityfunctions';

const HoldingCard = ({data}) => {
  const {symbol, ltp, avgPrice, quantity} = data;
  return (
    <View style={styles.holdingCard}>
      <Row>
        <Text style={styles.symbolText}>{symbol}</Text>
        <Text style={styles.ltp}>
          LTP :{' '}
          <Text style={styles.value}>
            {CURRENCY} {ltp}
          </Text>
        </Text>
      </Row>
      <Row>
        <Text style={styles.ltp}>{quantity}</Text>
        <Text style={styles.ltp}>
          P/L :{' '}
          <Text style={styles.value}>
            {CURRENCY} {getProfitAndLossPerHolding(ltp, avgPrice, quantity)}
          </Text>
        </Text>
      </Row>
    </View>
  );
};

export default HoldingCard;
const styles = StyleSheet.create({
  symbolText: {
    color: colors.BlACK,
    fontWeight: '700',
    fontSize: 16,
  },
  holdingCard: {
    paddingVertical: 8,
    
  },
  value: {
    color: colors.BlACK,
    fontWeight: '600',
    fontSize: 16,
  },
  ltp: {
    color: colors.BlACK,
  },
});
