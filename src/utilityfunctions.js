export const getProfitAndLossPerHolding = (ltp, avgPrice, Quantity) => {
  const pl = ltp * Quantity - avgPrice * Quantity;
  return pl.toFixed(2);
};
export const getTotalCurrentValue = holdings => {
  const currentValues = holdings?.map(({ltp, quantity}) => ltp * quantity);
  return getTotal(currentValues);
};
export const getTotalInvestmentValue = holdings => {
  const currentValues = holdings?.map(
    ({avgPrice, quantity}) => avgPrice * quantity,
  );
  return getTotal(currentValues);
};
export const getTodayPL = holdings => {
  const currentValues = holdings?.map(
    ({ltp, quantity, close}) => (close - ltp) * quantity,
  );
  return getTotal(currentValues);
};
const getTotal = currentValues => {
  const sum = currentValues?.reduce((current, next) => {
    return current + next;
  }, 0);
  return sum;
};
export const getTotalPL = holdings => {
  return getTotalCurrentValue(holdings) - getTotalInvestmentValue(holdings);
};
