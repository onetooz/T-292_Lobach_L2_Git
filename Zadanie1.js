function hasTwoCubeSums(n) {
    const sumsOfCubes = {};
    const limit = Math.cbrt(n);
    
    for (let i = 1; i <= limit; i++) {
        for (let j = i + 1; j <= limit; j++) {
            const sum = i * i * i + j * j * j;
            
            if (sum === n) {
                if (sumsOfCubes[n]) {
                    const [a, b] = sumsOfCubes[n];
                    if (a !== i && a !== j && b !== i && b !== j) {
                        return true;
                    }
                } else {
                    sumsOfCubes[n] = [i, j];
                }
            } else if (sum > n) { 
                break;
            }
        }
    }
    return false;
}