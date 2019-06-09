// For: http://www.webdeveloper.com/forum/showthread.php?t=238170
// Link for Random Img with Links: https://www.webdeveloper.com/forum/d/238170-mutliple-random-images-with-personal-links/2


var imgLinks = [
    // format: ['imageSource','imageLinkURL'],
      ['images/ceramics/Ceramics_1.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_2.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_3.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_4.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_5.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_6.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_7.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_8.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_9.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_10.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_11.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_12.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_13.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_14.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_15.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_16.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_17.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_18.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_19.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_20.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_21.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_22.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_23.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_24.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_25.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_26.JPG','art_ceramics.html']	// NOTE: no comma after last entry
    ];

    

function SetImage(IDS,imgPtr) {
  imgPtr = parseInt(imgPtr);
  document.getElementById(IDS).src = imgLinks[imgPtr][0];
  document.getElementById(IDS).alt = imgLinks[imgPtr][1];
  document.getElementById('Captions').innerHTML = imgLinks[imgPtr][1];
}

function RandomLink() {
    //var R = Math.random() * imgLinks.length;

    var text;
    var i;
    for(i = 0; i < imgLinks.length; i++){
        var R = Math.random() * imgLinks.length;
        text = "Pics" + i;
        SetImage(text, R);
        
        
    }

}

function GoToURL(URL) { document.location.href = URL; }

onload = function () { RandomLink(); }
