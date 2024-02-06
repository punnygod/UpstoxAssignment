import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/header';
import {TITLE} from '../constants';
import {getHoldings} from '../api/HoldingAPI';
import HoldingsList from '../components/holdingsList';
import BottomView from '../components/bottomView';
import TotalHolding from '../components/totalHoldiing';

const Home = () => {
  const [holdings, setHoldings] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchHoldings() {
      const response = await getHoldings();
      setHoldings(response);
    }
    fetchHoldings();
  }, []);

  return (
    <View style={styles.homeContainer}>
      <Header title={TITLE} />
      <HoldingsList holdings={holdings?.userHolding} />
      <BottomView open={open} toggleOpen={() => setOpen(prev => !prev)}>
        <TotalHolding data={holdings?.userHolding} open={open} />
      </BottomView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#C3C3C8',
  },
});
