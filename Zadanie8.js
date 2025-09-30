function expandedForm(num) {
  const numStr = num.toString();
  const result = [];
  
  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr[i];
    if (digit === '0') continue;
    
    let zeros = '';
    for (let j = 0; j < numStr.length - i - 1; j++) {
      zeros += '0';
    }
    
    result.push(digit + zeros);
  }
  
  return result.join(' + ');
}