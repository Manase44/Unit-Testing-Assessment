export const calculateAverage = (math, eng, kis, phy, che, re, comp) => {
  let average = (math + eng + kis + phy + che + re + comp) / 7;
  return Math.floor(average);
};
