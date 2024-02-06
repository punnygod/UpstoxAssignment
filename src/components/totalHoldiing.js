import React from 'react';
import Row from '../styles/Row';
import {View, Text, StyleSheet} from 'react-native';
import {CURRENCY} from '../constants';
import colors from '../colors';
import {
  getTotalCurrentValue,
  getTotalInvestmentValue,
  getTotalPL,
  getTodayPL,
} from '../utilityfunctions';

const TotalHolding = ({open, data}) => {
  const amount = getTotalPL(data).toFixed(2);
  const detailedView = [
    {name: 'Current Value', value: getTotalCurrentValue(data).toFixed(2)},
    {name: 'Total Investment', value: getTotalInvestmentValue(data).toFixed(2)},
    {name: `Today's Profit & Loss`, value: getTodayPL(data).toFixed(2)},
  ];
  return (
    <View>
      {open ? (
        <View style={styles.detailedView}>
          {detailedView.map(({name, value}) => (
            <Row>
              <Text style={styles.boldText}>{name} </Text>
              <Text style={styles.medText}>
                {CURRENCY} {value}
              </Text>
            </Row>
          ))}
        </View>
      ) : null}

      <Row>
        <Text style={styles.boldText}>Profit & Loss: </Text>
        <Text style={styles.medText}>
          {CURRENCY} {amount}
        </Text>
      </Row>
    </View>
  );
};

export default TotalHolding;
const styles = StyleSheet.create({
  boldText: {
    color: colors.BlACK,
    fontWeight: '700',
    fontSize: 16,
  },
  medText: {
    color: colors.BlACK,
    fontWeight: '400',
    fontSize: 16,
  },
  detailedView: {
    marginBottom: 25,
  },
});
