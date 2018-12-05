// var color = "rgb(18, 149, 68)";
// document.getElementById('button1').onclick = function () {
//   document.getElementById('firstbox').style.backgroundColor = color;
// };
//
// var x, y, z, secondColor;
//
// document.getElementById("button2").onclick = function () {
//   x = Math.round(Math.random()*256);
//   y = Math.round(Math.random()*256);
//   z = Math.round(Math.random()*256);
//   var secondColor = "rgb(" + x + ", " + y + " ," + z + ")";
//
//   document.getElementById("secondbox").style.backgroundColor = secondColor;
// };

function createRandomColor() {
  var x, y, z, color;
  x = Math.round(Math.random()*256);
  y = Math.round(Math.random()*256);
  z = Math.round(Math.random()*256);
  color = "rgb(" + x + ", " + y + " ," + z + ")";
  return color;
}

  document.getElementById("button1").onclick = function () {
    var randomColor = createRandomColor();
    document.getElementById("firstbox").style.backgroundColor = randomColor;
  };

  document.getElementById("button2").onclick = function () {
    var randomColor = createRandomColor();
    document.getElementById("secondbox").style.backgroundColor = randomColor;
  };

  document.getElementById("button3").onclick = function () {
    var randomColor = createRandomColor();
    document.getElementById("thirdbox").style.backgroundColor = randomColor;
  };
