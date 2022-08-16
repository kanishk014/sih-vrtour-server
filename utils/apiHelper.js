const mime = require("mime");
const fs = require("fs");

exports.saveImage = (encodedUri, name, folderPath) => {
  encodedUri = "data:image/jpeg;base64," + encodedUri;
  const matches = encodedUri.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  
  let extension = mime.getExtension(matches[1]);
  
  let fileName = name + "." + extension;
  
  try {
    
    let data = String(matches[2]);

    let buff = new Buffer.from(data, "base64");
    
    fs.writeFileSync(`${folderPath}` + fileName, buff);    

    return fileName;
  } catch (e) {
    console.log(e);
  }
};