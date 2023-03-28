export class ReversingStringService {
  async execute(myString: string): Promise<string> {
    const reverseString = myString
      .split('')
      .reduce((reversedString, character) => {
        return character + reversedString;
      }, '');

    return reverseString;
  }
}
