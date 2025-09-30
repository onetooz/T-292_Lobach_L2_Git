function primeFactors(n) {
    let result = "";
    let temp = n;
    let count = 0;
    while (temp % 2 === 0) {
        temp /= 2;
        count++;
    }
   
    if (count > 0) {
        result += count > 1 ? `(2**${count})` : '(2)';
    }
    
    for (let i = 3; i <= Math.sqrt(temp); i += 2) {
        count = 0;
        while (temp % i === 0) {
            temp /= i;
            count++;
        }
       
        if (count > 0) {
            result += count > 1 ? `(${i}**${count})` : `(${i})`;
        }
    }
    
    if (temp > 1) {
        result += `(${temp})`;
    }
    
    return result;
}