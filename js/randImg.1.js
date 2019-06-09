// For: http://www.webdeveloper.com/forum/showthread.php?t=238170
// Link for Random Img with Links: https://www.webdeveloper.com/forum/d/238170-mutliple-random-images-with-personal-links/2
// Link for For Loop with images: https://css-tricks.com/forums/topic/image-array-using-javascript/

/*
var imgLinks = [
    // format: ['imageSource','imageLinkURL'],
      ['images/ceramics/Ceramics_01.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_02.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_03.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_04.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_05.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_06.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_07.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_08.JPG','art_ceramics.html'],
      ['images/ceramics/Ceramics_09.JPG','art_ceramics.html'],
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
*/

/*
for(var i = 0; i < 63; i++) {
    imgLinks[i] = 'images/ceramics/Ceramics_' + i + '.JPG' 

var imgLinks = [
        // format: ['imageSource','imageLinkURL'],
        ['string', 'string'], 
        ['string', 'string']    // NOTE: no comma after last entry
    ];

    for(var i = 0; i < 63; i++) {
        imgLinks['images/ceramics/Ceramics_' + i + '.JPG' +', ' + 'art_ceramics.html'];
        //img[i] = 'images/ceramics/Ceramics_' + i + '.JPG' 
    }
}
*/

/*
function imagesArray() {
    var gallery = document.getElementById("pozeGallery");
    for (i = 0; i < imgArray.length; i++) {
        gallery.appendChild(imgArray[i]);
    }
};
*/

/*
var imgLinks = [
    // format: ['imageSource','imageLinkURL'],
    ['string', 'string'],
      // NOTE: no comma after last entry
];

function addImgToArray() {
    var imageSource;
    var imageLinkURL;
    var i;


    for(i = 0; i < 9; i++){
        imageSource = 'images/ceramics/Ceramics_0' + i + '.JPG' ;
        imageLinkURL = 'art_ceramics.html';
        //imgLinks[i].src = [imgFileName, imgHtmlLink];
        
    }
    
    imgLinks[i].src = imageSource, imageLinkURL;
}
*/

var imgLinks = [];

for (var i = 1; i < 64; i++) {
    imgLinks[i] = ['images/ceramics/Ceramics_' + i + '.JPG', 'art_ceramics.html'];
}

function SetImage(IDS, imgPtr) {
    imgPtr = parseInt(imgPtr);
    document.getElementById(IDS).src = imgLinks[imgPtr][0];
    document.getElementById(IDS).alt = imgLinks[imgPtr][1];
    document.getElementById('Captions').innerHTML = imgLinks[imgPtr][1];
}

function RandomLink() {
    //var R = Math.random() * imgLinks.length;

    var text;
    var i;
    for (i = 0; i < imgLinks.length; i++) {
        var R = Math.random() * imgLinks.length;
        text = "Pics" + i;
        SetImage(text, R);


    }

}

function GoToURL(URL) {
    document.location.href = URL;
}

onload = function () {
    RandomLink();
}