//Create image array
var imgLinks = [];

//Steps through images in the allimages folder to fill and array
for (var i = 0; i < 301; i++) {
  imgLinks[i] = [
    './images/Unsplash/stock_TreesMountains/stock_TreesMnts_' + i + '.JPG',
    'test-TreesMountains.html',
    'photo number ' + i
  ];
}

//Set the image html attributes according to the array 
function SetImage(IDS, imgPtr) {
  imgPtr = parseInt(imgPtr);
  document.getElementById(IDS).src = imgLinks[imgPtr][0];
  document.getElementById(IDS).alt = imgLinks[imgPtr][1];
  document.getElementById('Captions').innerHTML = imgLinks[imgPtr][2];
}

function RandomLink() {

  var text;
  var i;
  for (i = 0; i < imgLinks.length; i++) {
    var R = Math.random() * imgLinks.length;
    text = "Picture" + i;
    SetImage(text, R);
  }
}

function GoToURL(URL) {
  document.location.href = URL;
}

onload = function () {
  RandomLink();
}


var file = document.getElementById(IDS).src = imgLinks[imgPrt][0];

function mycallback() {
  var pictureTitle = "Title: " + ImageInfo.getField(file, "title") + ".";
}

ImageInfo.loadInfo(file, mycallback);