function divisibleSumPairs(n, k, ar) {
    let result = 0;
    for(let i =0; i<ar.length; i++){
        for (let z=i+1; z<ar.length; z++){
            if((ar[i]+ar[z])% k === 0){
            result = result +1
            }
        }
    }
    return result;
}