function FileFinder() {
    var Path, foundFiles, aFile, Path;
    var imgLinks = [];
    var imgPath,

        // initialize numOfImgs to count number of images
        var numOfImgs = 0;

    //
    Path = "./images/pics/allimages/"; //Folder where we will search for files
    foundFiles = aqFileSystem.FindFiles(Path, "*.jpg");


    if (!strictEqual(foundFiles, null))
        while (foundFiles.HasNext()) {

            //increase image count
            numOfImgs++;
            aFile = foundFiles.Next();

            // set path for each image
            imgPath = (Path, "*.jpg");



        }
    else Log.Message("No files were found.");
}