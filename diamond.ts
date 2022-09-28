const n = Number(prompt("整数を入力"));
for (let i = 1; i <= n; i ++) {
  let output = "";
  for (let j = 1; j < n-i+1; j++) {
    output += " ";
  }
  for (let j = 1; j <= i; j++) {
    output += "*";
  }
  for (let j = 1; j <= i - 1; j++) {
    output += "*";
  }
  console.log(output);
}
for (let i = n-1; i >= 1; i --) {
  let output = "";
for (let j = 1; j < n-i+1; j++) {
    output += " ";
  }
  for (let j = i; j >= 1; j--) {
    output += "*";
  }
  for (let j = i - 1; j >= 1; j--) {
    output += "*";
  }
  console.log(output);
}