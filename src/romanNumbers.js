export default (numbers) => {
  let sumNumber = 0;
  const listNumbers = numbers.split("");

  listNumbers.map((roman, i) => {
    let count;
    const number = numbersRoman[roman];

    if (numbersRoman[listNumbers[i - 1]] >= number)
      return (sumNumber += number);

    count = number - sumNumber;
    sumNumber = count;
  });

  return sumNumber;
};

const numbersRoman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  M: 1000,
};
