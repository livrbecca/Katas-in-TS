function spinWords(str: string) {
  //const revWords = [];
  const message = [];
  const splitWords = str.split(" ");
  console.log(splitWords);
  splitWords.forEach((word) => {
    if (word.length >= 5) {
      Array(word).reverse();
      message.push(word);
    } else {
      message.push(word);
    }
  });
  return splitWords;
}

console.log(spinWords("Hello my name is Olivia or Liv"));
