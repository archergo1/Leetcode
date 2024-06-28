function gcd(p, q) {
    if(q==0) return p;
    r = p%q;
    return gcd(q,r);   
}

console.log(gcd(15,60));
