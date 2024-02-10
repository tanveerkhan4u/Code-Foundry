
var zip = new JSZip();

zip.file("Hello.text", "Hello World\n");

zip.generateAsync({type:"blob"})

.then(function(content){
saveAs(content, "archive.zip");

});
