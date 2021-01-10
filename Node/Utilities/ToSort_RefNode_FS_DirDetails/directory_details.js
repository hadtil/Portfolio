var path = require('path');
var fs = require('fs');
// This is the filesystem module

// Taken from https://code-maven.com/list-content-of-directory-with-nodejs
if (process.argv.length <= 2) {
    processFilename = path.basename(__filename);
    console.log("ERROR - Usage: " + processFilename + " path/to/directory");
    console.log("");
    // process.exit(-1);
    process.exit(0);
}
 
var pathToSearch = process.argv[2];

console.log("Reading Directory " + pathToSearch);

fs.readdir(pathToSearch, function(err, items) {
    console.log(items);

    for (var i=0; i<items.length; i++) {

        let objectName = items[i];
        let fullPath = path.format({
                            dir: pathToSearch,
                            base: objectName
                       });

        fs.lstat(fullPath, (errlstat, stats) => {
            console.log(objectName);

            if(errlstat)
                return console.log(errlstat); //Handle error
        
            console.log(`Is file: ${stats.isFile()}`);
            console.log(`Is directory: ${stats.isDirectory()}`);
            // console.log(`Is symbolic link: ${stats.isSymbolicLink()}`);
            // console.log(`Is FIFO: ${stats.isFIFO()}`);
            // console.log(`Is socket: ${stats.isSocket()}`);
            // console.log(`Is character device: ${stats.isCharacterDevice()}`);
            // console.log(`Is block device: ${stats.isBlockDevice()}`);
        });        
    }
});

