function starPattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      let star = "*";
      row += star;
    }
    console.log(row);
  }
}
starPattern1(4);
// Output:
// ****
// ****
// ****
// ****
// Explanation: This function prints a square pattern of stars with n rows and n columns. Each row contains n stars, and there are n such rows.
// The outer loop iterates through each row, while the inner loop constructs each row by appending stars to a string. Finally, the constructed row is printed to the console.

function starPattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      let star = "*";
      row += star;
    }
    console.log(row);
  }
}
starPattern2(4);
// Output:
// *
// **
// ***
// ****

function starPattern3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}
starPattern3(5);

function numPattern1(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      let num = j;
      row += num;
    }
    console.log(row);
  }
}
numPattern1(5);
// outPut:
// 1
// 12
// 123
// 1234
// 12345

function numPattern2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      let num = i;
      row += num;
    }
    console.log(row);
  }
}
numPattern2(5);
// output:
// 1
// 22
// 333
// 4444
// 55555

function numPattern3(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      let num = j;
      row += num;
    }
    console.log(row);
  }
}
numPattern3(5);
// Output:
// 12345
// 1234
// 123
// 12
// 1

function numPattern4(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let toggle = 1;
    for (let j = 1; j <= i; j++) {
      row += toggle;

      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}
numPattern4(5);
// output:
// 1
// 10
// 101
// 1010
// 10101

function numPattern5(n) {
  let toggle = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += toggle;

      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}
numPattern5(5);
