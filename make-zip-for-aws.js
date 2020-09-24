/**

    Use archiver package to make a zip to use with aws

    https://www.npmjs.com/package/archiver

    https://github.com/archiverjs/node-archiver

 */
// require modules
const fs = require('fs');
const archiver = require('archiver');
 
// create a file to stream archive data to.
const output = fs.createWriteStream(__dirname + '/for-aws.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

// listen for all archive data to be written
// 'close' event is fired only when a file descriptor is involved
output.on('close', function() {
  console.log(archive.pointer() + ' total bytes zipped');
  console.log('Zip file is ready.');
});

// good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    // log warning
    console.log({err})
  } else {
    // throw error
    throw err;
  }
});

// good practice to catch this error explicitly
archive.on('error', function(err) {
  throw err;
});

// pipe archive data to the file
archive.pipe(output);

// append both package json files
archive.glob('package*.json');
// append all files in the src folder
archive.directory('src/');

// finalize the archive (ie we are done appending files but streams have to finish yet)
// 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
archive.finalize();
