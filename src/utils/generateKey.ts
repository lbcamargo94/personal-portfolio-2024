export const GenerateKey = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const generateRandom = Math.floor(Math.random() * (max - min) + min);

  return generateRandom.toString();
};
