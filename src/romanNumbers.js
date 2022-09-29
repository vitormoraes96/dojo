export default (numbers) => {
  let sumNumber = 0;
  const listNumbers = numbers.split("");

  listNumbers.map((number, i) => {
    sumNumber =
      numbersRoman[listNumbers[i + 1]] > numbersRoman[number]
        ? sumNumber - numbersRoman[number]
        : sumNumber + numbersRoman[number];
  });

  return sumNumber;
};

const numbersRoman = {
  I: 1,
  V: 5,
};
