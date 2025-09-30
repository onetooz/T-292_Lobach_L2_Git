function toWeirdCase(string){
  let result = '';
  let wordIndex = 0; 
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      result += ' ';
      wordIndex = 0;
    } else {
      result += wordIndex % 2 === 0 
        ? string[i].toUpperCase() 
        : string[i].toLowerCase();
      wordIndex++;
    }
  }
  
  return result;
}