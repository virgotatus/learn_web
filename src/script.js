function doalert() {
  alert("my my alert"); 
}

function doconfirm() {
  var choose = confirm("Are u ok?");
  if (choose) {
    alert("You pressed OK!");
  }
  else{
    alert("Are you sure you want to cancel?");
  }
}

function changecolor() {
  var dd1 = document.getElementById("div1");
  var dd2 = document.getElementById("div2");
  dd1.className = "blueback";
  dd2.className = "yellowback";
}
function changetext() {
  var dd1 = document.getElementById("div1");
  var dd2 = document.getElementById("div2");
  dd1.innerHTML = "blueback";
  dd2.innerHTML = "yellowback";
}
function docolor(){
  var canvas = document.getElementById("canvas");
  canvas.style.backgroundColor = "blue";
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "yellow";
  ctx.fillRect(10,10,20,20);
  ctx.fillStyle = "black";
  ctx.font = "30px Arial"
  ctx.fillText("Hello",10,20);
  ctx.clearRect(15,15,30,30);
}

function doThing() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "yellow";
  var slider = document.getElementById("sldr");
  var line_length=slider.value;
  ctx.fillRect(10,10,10+line_length,10+line_length);
}
var image;
function upload() {
  var fileinput = document.getElementById("input");
  var canvas = document.getElementById("piccanvas");
  image = new SimpleImage(fileinput);
  image.drawTo(canvas);
}

function makeGray() {
  for (var px of image.values()) {
    var average = (px.getGreen()+px.getBlue()+px.getRed())/3;
    px.setGreen(average);
    px.setBlue(average);
    px.setRed(average);
}
  var canvas = document.getElementById("graycanvas");
  image.drawTo(canvas);
}

var fore_image;
var back_image;
function upload_fore() {
  var fileinput = document.getElementById("finput");
  var canvas = document.getElementById("foreimage");
  fore_image = new SimpleImage(fileinput);
  fore_image.drawTo(canvas);
  alert("fore_image loaded!");
}
function upload_back() {
  var fileinput = document.getElementById("binput");
  var canvas = document.getElementById("backimage");
  back_image = new SimpleImage(fileinput);
  back_image.drawTo(canvas);
  alert("back_image loaded!");
}
function compisition() {
  if (fore_image == null) {
    alert("fore image has not loaded");
    return;
  }
  if (back_image==null) {
    alert("back image has not loaded");
    return;
  }
  var compos_image = new SimpleImage(fore_image.getWidth(),fore_image.getHeight());
  for (var px of compos_image.values()) {
    var f_px = fore_image.getPixel(px.getX(),px.getY());
    var b_px = back_image.getPixel(px.getX(),px.getY());
    if (f_px.getGreen()>230 && f_px.getRed()<30 && f_px.getBlue()<30) {
      px.setAllFrom(b_px);
    }
    else{
      px.setAllFrom(f_px);
    }
}
  var canvas = document.getElementById("foreimage");
  var ctx = canvas.getContext("2d");
  //ctx.clearRect(0,0,canvas.width,canvas.height);
  compos_image.drawTo(canvas);
  alert("finished");
}

