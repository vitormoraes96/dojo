export default (numbers) => {
  let sumNumber = 0;
  const listNumbers = numbers.split("");
  listNumbers.map((number) => (sumNumber += numbersRoman[number]));
  return sumNumber;
};

const numbersRoman = {
  I: 1,
  V: 5,
};
