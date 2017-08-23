// מעויין המשולש הראשון
var i = prompt("הקש מספר מאחד עד ");

var o = i;
var a = "*";
var y = 1;
while(y < i){
  var m = 0 ;
  var b = "\xa0";
  while(m < o){
    b += "\xa0";
    m += 1;
  }
  o -= 1;
  document.write(b + a + "<br>");
  a += "*";
  y += 1;
}
// המשולש ההפוך
var o = i;
var a = "*";
var y = 0;
var b = "\xa0";
while(y <= i){
  var m = 0 ;
  a = "*";
  while(m < o){
    a += "*"
    m += 1;
  }
  o -= 1;
  document.write(b + a + "<br>");
  y += 1;
  b += "\xa0";
};
// ריבוע
var a = "*";
var y = 1;
var lineNum = 0;
while (lineNum < i) {
  while(y < i){
    a += "*";
    y = y +1;
  };
  document.write(a + "<br>");
  lineNum += 1;
};
// משולש ישר זוית בכוכביות
var a = "*";
var y = 0;
while(y < i){
  document.write(a + "<br>");
  a += "*";
  y = y +1;
};
