const inverterString = (myString: string): string => {
  let newString = '';
  for (let i = myString.length - 1; i >= 0; i--) {
    newString += myString[i];
  }
  return newString;
};

const myString: string = 'Obrigado target Sistemas!';

console.log(inverterString(myString));
