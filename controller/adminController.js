require("dotenv").config();
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { User } = require("../model/userModel");
const Email = require("../utils/email");
const crypto = require("crypto");

const { Property } = require("../model/propertiesModel");
const helper = require("../utils/apiHelper");
const {uploadFile} = require("../utils/s3");

const { generateToken } = require("../utils/generateToken");
const expressAsyncHandler = require("express-async-handler");

exports.addProperty = asyncHandler(async (req, res) => {
  try{
    const {
      title,
      propertyImage,
      price,
      sqft,
      landArea,
      type,
      builtYear,
      parkingSpaces,
      address,
      timings,
      aartiTime,
      tourTime,
      about,
      factsAndFigures,
      famous,
      activities,
      feel360,
      vrVideo,
      mapLocation,
      latitude,
      longitude,
      video,
      websiteUrl,
    } = req.body;


    let payload = {
      title,      
      price,
      sqft,
      landArea,
      type,
      builtYear,
      parkingSpaces,
      address,
      timings,
      aartiTime,
      tourTime,
      about,
      factsAndFigures,
      famous,
      activities,
      feel360,
      vrVideo,
      mapLocation,
      latitude,
      longitude,
      video,
      websiteUrl,
    }

    if(propertyImage){
      let date = new Date().getTime();
      let name = title.slice(0, title.indexOf(' ')) + "-pilgrimage-" + date;
      let folderPath = "./uploads/propertyImages/";
      const imageName = helper.saveImage(propertyImage, name, folderPath);      
      const result = await uploadFile(`./uploads/propertyImages/${name}.jpeg`, name);      
      payload = { ...payload, propertyImage: "https://sih-vrtour-server.vercel.app/api/property/getImage/" + result.Key };
    }

    const result = await Property(payload);
    result.save();

    return res.status(200).json({
      message: "Success",
      data: result
    })
  }
  catch(err){
    console.log(err);
    throw new Error("Error adding property");
  }
})

