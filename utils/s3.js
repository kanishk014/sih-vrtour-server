const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const bucketName=process.env.AW_BUCKET_NAME
const bucketRegion=process.env.AW_BUCKET_REGION
const accessKeyId=process.env.AW_ACCESS_KEY
const secretAccessKey=process.env.AW_SECRET_KEY

const s3 = new S3({
  bucketRegion,
  accessKeyId,
  secretAccessKey
})

exports.uploadFile = async (file, fileName) => {   
  const fileStream = fs.createReadStream(file);  

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: fileName
  }

  return s3.upload(uploadParams).promise();
}

exports.getFileStream = (fileKey) => {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  }

  return s3.getObject(downloadParams).createReadStream();
}
