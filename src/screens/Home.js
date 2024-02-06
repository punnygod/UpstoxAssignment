import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Header from '../components/header';
import {TITLE} from '../constants';
import {getHoldings} from '../api/HoldingAPI';
import HoldingsList from '../components/holdingsList';
import BottomView from '../components/bottomView';
import TotalHolding from '../components/totalHoldiing';
import colors from '../colors';

const Home = () => {
  const [holdings, setHoldings] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHoldings() {
      const response = await getHoldings();
      setHoldings(response);
      setLoading(false);
    }
    fetchHoldings();
  }, []);

  return (
    <View style={styles.homeContainer}>
      {loading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator color={colors.BlACK} size={50} />
        </View>
      ) : (
        <>
          <Header title={TITLE} />
          <HoldingsList holdings={holdings?.userHolding} />
          <BottomView open={open} toggleOpen={() => setOpen(prev => !prev)}>
            <TotalHolding data={holdings?.userHolding} open={open} />
          </BottomView>
        </>
      )}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#C3C3C8',
  },
  loadingView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});
