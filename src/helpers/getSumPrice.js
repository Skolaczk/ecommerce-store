export const getSumPrice = (data) => {
  if (!data.length) return 0;
  const sum = data.reduce((acc, { price }) => {
    return (acc += price);
  }, 0);
  return sum;
};
