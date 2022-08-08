require("dotenv").config();
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { User } = require("../model/userModel");
const Email = require("../utils/email");
const crypto = require("crypto");

const { Property } = require("../model/propertiesModel");

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
      mapLocation,
      latitude,
      longitude,
      video,
      websiteUrl,
    } = req.body;


    const payload = {
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
      mapLocation,
      latitude,
      longitude,
      video,
      websiteUrl,
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