function drawTriangle(size) {
  for (let i = 1; i <= size; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

drawTriangle(10);
