var smallestEvenMultiple = function(n) {
    // to find the Least Common Multiple of 2 & n 
    // if n is an odd
    if(n%2 !== 0) {
        return 2*n
    }else{
        return n
    }
};