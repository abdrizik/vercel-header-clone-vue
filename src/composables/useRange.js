export const useRange = (num, inMin, inMax, outMin, outMax) => {
  const newValue =
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  const largest = Math.max(outMin, outMax);
  const smallest = Math.min(outMin, outMax);
  return Math.min(Math.max(newValue, smallest), largest);
};
