const sentences = "a b c";

const replacedSentences = sentences.replace(/[abc]/g, (match) => {
  switch (match) {
    case 'a':
      return 'p';
    case 'b':
      return 'q';
    case 'c':
      return 'r';
    default:
      return match;
  }
});

console.log(replacedSentences);
