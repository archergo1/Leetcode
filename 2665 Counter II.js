// This is about the concept of Closure

function outer() {
  let a = 0;

  return function inner() {
    a += 1;
    console.log(a);
  };
}

const call = outer();

call();
call();
call();
