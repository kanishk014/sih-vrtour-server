const express = require("express");
const propertyRouter = express.Router();
// const { addProperty, getProperty, getPropertyByUserId } = require("../controller/properties");
// propertyRouter.post("/add", addProperty);
// propertyRouter.get("/get/:category", getProperty);

const { addProperty, getProperty, updateProperty, deleteProperty, getPropertyByUserId, getPropertyDetailsById, getImage } = require("../controller/properties");
propertyRouter.get("/get", getProperty);
propertyRouter.post("/add", addProperty);
propertyRouter.patch("/update/:id", updateProperty);
propertyRouter.delete("/delete/:id", deleteProperty);
propertyRouter.get("/getuserproperty/:id", getPropertyByUserId);
propertyRouter.get("/getpropertydetails/:id", getPropertyDetailsById);
propertyRouter.get("/getImage/:key", getImage);

module.exports = propertyRouter;
