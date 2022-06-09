let sum = "";
function buildSum(char) {
  sum += char;
  document.getElementById("output").innerHTML = sum;
}
function evaluateSum() {
  sum = eval(sum);
  document.getElementById("output").innerHTML = sum;
}
function resetSum() {
  sum = "";
  document.getElementById("output").innerHTML = sum;
}