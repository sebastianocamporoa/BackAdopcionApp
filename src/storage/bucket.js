import S3 from "aws-sdk/clients/s3.js";
import fs from "fs";

const s3 = new S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export function uploadFile(file) {
  const fileStream = fs.readFileSync(file.path);
  const uploadParams = {
    Key: file.filename,
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: fileStream,
  };
  return s3.upload(uploadParams).promise();
}

// downloads
