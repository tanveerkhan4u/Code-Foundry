const JSZip = require('jszip');
const fs = require('fs');

const zip = new JSZip();


try {

  zip.file("myfile.txt", "Hello NodeJS\n");

  const files = ["myfile.txt"];
  const myzipfolder = zip.folder("files");

  for (const image of files) {
      const imageData = fs.readFileSync(image);
      myzipfolder.file(image, imageData);
  }

  zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
      .pipe(fs.createWriteStream('sample.zip'))
      .on('finish', function () {
          console.log("sample.zip written.");
      });

} catch (err) {
  console.error(err)
}