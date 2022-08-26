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

function toRad(Value) {
  return (Value * Math.PI) / 180;
}

exports.checkDistance = (lat1, lon1, lat2, lon2) => {  
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  
  d = d.toFixed(3);

  console.log(d);

  return d;
};