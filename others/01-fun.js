function fun(x, y) {
  if (x === 0 ) {
    return y;
  } else {
    return fun(x -1, x + y);
  }
}

console.log(fun(5, 2));
