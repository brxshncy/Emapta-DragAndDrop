export const delay = () => {
  const randomDelay = [1000, 2000];
  const delayIndex = Math.floor(Math.random() * randomDelay.length);
  return new Promise((resolve) => setTimeout(resolve, randomDelay[delayIndex]));
};
