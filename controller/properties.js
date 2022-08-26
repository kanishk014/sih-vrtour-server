const asyncHandler = require("express-async-handler");
// var bcrypt = require("bcryptjs");
const { Property } = require("../model/propertiesModel");
const helper = require("../utils/apiHelper");
const {uploadFile} = require("../utils/s3");
const {getFileStream} = require("../utils/s3");
const mongoose=require("mongoose")
exports.addProperty = asyncHandler(async (req, res) => {
    // var id = mongoose.Types.ObjectId("4edd40c86762e0fb12000003");

	// const {
  //       userId,
	// 	title,
	// 	propertyImage,
	// 	overview,
	// 	price,
	// 	beds,
	// 	baths,
	// 	sqft,
	// 	type,
	// 	category,
	// 	builtYear,
	// 	parkingSpaces,
	// 	roomCount,
	// 	location,
	// 	tvCable,
	// 	barbeque,
	// 	ac,
	// 	lawn,
	// 	laundry,
	// 	ccCam,
	// 	feel_360,
  //       status
	// } = req.body;



    // const Data = [
		// 	{
		// 		// id: 1,
		// 		title: 'Akshardham Temple',
    //     propertyImage: 'img/blog/property21.jpg',
    //     price: '250',
    //     sqft: 100,
    //     landArea: 100,
    //     type: 'Temple',
    //     builtYear: '2019',
    //     parkingSpaces: 4,
    //     location: 'Address',
    //     timings: '10 AM to 8 PM',
    //     aartiTime: '6 PM',
    //     tourTime: '45 mins',
    //     about: 'lorem ipsum',
    //     factsAndFigures: 'Lorem ipsum',
    //     famous: 'Lorem ipsum',
    //     activities: ['light show', 'Prashad'],
    //     feel_360: 'https://www.airpano.com/embed.php?3D=akshardham-india',
    //     video: 'https://www.youtube.com/watch?v=bFb4F2MvOhQ',
    //     map_location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.280068196575!2d77.2772619!3d28.6126735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x69a09f265ef3b22a!2sAkshardham!5e0!3m2!1sen!2sin!4v1648470333949!5m2!1sen!2sin',
    //     book_ticket: 'https://akshardham.com/visitor-info/#dresscode',
		// 	},
		// 	{
		// 		// id: 2,
		// 		title: 'Akshardham Temple',
    //     propertyImage: 'img/blog/property21.jpg',
    //     price: '250',
    //     sqft: 100,
    //     landArea: 100,
    //     type: 'Temple',
    //     builtYear: '2019',
    //     parkingSpaces: 4,
    //     location: 'Address',
    //     timings: '10 AM to 8 PM',
    //     aartiTime: '6 PM',
    //     tourTime: '45 mins',
    //     about: 'lorem ipsum',
    //     factsAndFigures: 'Lorem ipsum',
    //     famous: 'Lorem ipsum',
    //     activities: ['light show', 'Prashad'],
    //     feel_360: 'https://www.airpano.com/embed.php?3D=akshardham-india',
    //     video: 'https://www.youtube.com/watch?v=bFb4F2MvOhQ',
    //     map_location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.280068196575!2d77.2772619!3d28.6126735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x69a09f265ef3b22a!2sAkshardham!5e0!3m2!1sen!2sin!4v1648470333949!5m2!1sen!2sin',
    //     book_ticket: 'https://akshardham.com/visitor-info/#dresscode',
		// 	},
		// 	{
		// 		// id: 3,
		// 		title: 'Akshardham Temple',
    //     propertyImage: 'img/blog/property21.jpg',
    //     price: '250',
    //     sqft: 100,
    //     landArea: 100,
    //     type: 'Temple',
    //     builtYear: '2019',
    //     parkingSpaces: 4,
    //     location: 'Address',
    //     timings: '10 AM to 8 PM',
    //     aartiTime: '6 PM',
    //     tourTime: '45 mins',
    //     about: 'lorem ipsum',
    //     factsAndFigures: 'Lorem ipsum',
    //     famous: 'Lorem ipsum',
    //     activities: ['light show', 'Prashad'],
    //     feel_360: 'https://www.airpano.com/embed.php?3D=akshardham-india',
    //     video: 'https://www.youtube.com/watch?v=bFb4F2MvOhQ',
    //     map_location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.280068196575!2d77.2772619!3d28.6126735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x69a09f265ef3b22a!2sAkshardham!5e0!3m2!1sen!2sin!4v1648470333949!5m2!1sen!2sin',
    //     book_ticket: 'https://akshardham.com/visitor-info/#dresscode',
		// 	},
		// 	{
		// 		// id: 4,
		// 		title: 'Akshardham Temple',
    //     propertyImage: 'img/blog/property21.jpg',
    //     price: '250',
    //     sqft: 100,
    //     landArea: 100,
    //     type: 'Temple',
    //     builtYear: '2019',
    //     parkingSpaces: 4,
    //     location: 'Address',
    //     timings: '10 AM to 8 PM',
    //     aartiTime: '6 PM',
    //     tourTime: '45 mins',
    //     about: 'lorem ipsum',
    //     factsAndFigures: 'Lorem ipsum',
    //     famous: 'Lorem ipsum',
    //     activities: ['light show', 'Prashad'],
    //     feel_360: 'https://www.airpano.com/embed.php?3D=akshardham-india',
    //     video: 'https://www.youtube.com/watch?v=bFb4F2MvOhQ',
    //     map_location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.280068196575!2d77.2772619!3d28.6126735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x69a09f265ef3b22a!2sAkshardham!5e0!3m2!1sen!2sin!4v1648470333949!5m2!1sen!2sin',
    //     book_ticket: 'https://akshardham.com/visitor-info/#dresscode',
		// 	},
		// 	{
		// 		// id: 5,
		// 		title: 'Akshardham Temple',
    //     propertyImage: 'img/blog/property21.jpg',
    //     price: '250',
    //     sqft: 100,
    //     landArea: 100,
    //     type: 'Temple',
    //     builtYear: '2019',
    //     parkingSpaces: 4,
    //     location: 'Address',
    //     timings: '10 AM to 8 PM',
    //     aartiTime: '6 PM',
    //     tourTime: '45 mins',
    //     about: 'lorem ipsum',
    //     factsAndFigures: 'Lorem ipsum',
    //     famous: 'Lorem ipsum',
    //     activities: ['light show', 'Prashad'],
    //     feel_360: 'https://www.airpano.com/embed.php?3D=akshardham-india',
    //     video: 'https://www.youtube.com/watch?v=bFb4F2MvOhQ',
    //     map_location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.280068196575!2d77.2772619!3d28.6126735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x69a09f265ef3b22a!2sAkshardham!5e0!3m2!1sen!2sin!4v1648470333949!5m2!1sen!2sin',
    //     book_ticket: 'https://akshardham.com/visitor-info/#dresscode',
		// 	},
		// 	{
		// 		// id: 6,
		// 		title: 'Akshardham Temple',
    //     propertyImage: 'img/blog/property21.jpg',
    //     price: '250',
    //     sqft: 100,
    //     landArea: 100,
    //     type: 'Temple',
    //     builtYear: '2019',
    //     parkingSpaces: 4,
    //     location: 'Address',
    //     timings: '10 AM to 8 PM',
    //     aartiTime: '6 PM',
    //     tourTime: '45 mins',
    //     about: 'lorem ipsum',
    //     factsAndFigures: 'Lorem ipsum',
    //     famous: 'Lorem ipsum',
    //     activities: ['light show', 'Prashad'],
    //     feel_360: 'https://www.airpano.com/embed.php?3D=akshardham-india',
    //     video: 'https://www.youtube.com/watch?v=bFb4F2MvOhQ',
    //     map_location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.280068196575!2d77.2772619!3d28.6126735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x69a09f265ef3b22a!2sAkshardham!5e0!3m2!1sen!2sin!4v1648470333949!5m2!1sen!2sin',
    //     book_ticket: 'https://akshardham.com/visitor-info/#dresscode',
		// 	},		
		// ];

    //     const properties=Data.map((property)=>{return{...property}})
    //     const checkProp=await Property.insertMany(properties);
    //     if(checkProp){
    //         res.json("added");
    //     }
	// console.log(req.body, "user");

	// try {
	// 	const newProperty = await  Property.create({
  //           userId:mongoose.Types.ObjectId(userId),
	// 		title: title,
	// 		propertyImage: propertyImage,
	// 		overview: overview,
	// 		price: price,
	// 		category: category,
	// 		beds: beds,
	// 		baths: baths,
	// 		sqft: sqft,
	// 		type: type,
	// 		status: status,
	// 		builtYear: builtYear,
	// 		parkingSpaces: parkingSpaces,
	// 		roomCount: roomCount,
	// 		location: location,
	// 		tvCable: tvCable,
	// 		barbeque: barbeque,
	// 		ac: ac,
	// 		lawn: lawn,
	// 		laundry: laundry,
	// 		ccCam: ccCam,
	// 		feel_360: feel_360,
	// 	});
  //       console.log(newProperty);
	// 	// newProperty.save(() => {
	// 	// 	console.log("saved");
	// 	// });
	// 	if (newProperty) {
	// 		res.status(200).json(newProperty);
	// 	} else {
	// 		res.status(400);
	// 		throw new Error("Property not found");
	// 	}
	// } catch (e) {
	// 	res.status(400);

	// 	throw new Error(e.message);
	// }
	// if (propertyExist) {
	// 	res.status(401);
	// 	throw new Error("Property already exist");
	// } else {

	// }
});

exports.getProperty = asyncHandler(async (req, res) => {
    // const val = req.params.category.charAt(0).toUpperCase()+req.params.category.slice(1)
    // console.log(val);
	try {
    let properties = await Property.find({});

    if(req.query.sort){
      if(req.query.sort == "asc"){
        properties = await Property.find().sort({"title": 1});
      }
      else if(req.query.sort){
        properties = await Property.find().sort({"title": -1});
      }
    }    

		if (properties) {
			res.status(200).json(properties);
		} else {
			res.status(400);
			throw new Error("Properties not found");
		}
	} catch (e) {
		res.status(400);

		throw new Error(e.message);
	}
});


exports.getPropertyByUserId = asyncHandler(async (req, res) => {

	try {
		const properties = await Property.find({
			userId:req.params.id,
		});
        console.log(properties,"SEND");
		if (properties) {
			res.json(properties);
		} else {
			res.status(400);
			throw new Error("Properties not found");
		}
	} catch (e) {
		res.status(400);

		throw new Error(e.message);
	}
});

exports.updateProperty = asyncHandler(async (req, res) => {

  let body = req.body;

  if(body.propertyImage){
    let date = new Date().getTime();
    let name = body.title.slice(0, body.title.indexOf(' ')) + "-pilgrimage-" + date;
    let folderPath = "./uploads/propertyImages/";
    const imageName = helper.saveImage(body.propertyImage, name, folderPath);      
    const result = await uploadFile(`./uploads/propertyImages/${name}.jpeg`, name);      
    body = { ...body, propertyImage: "https://vrtour-sih.herokuapp.com/api/property/getImage/" + result.Key };
  }

  const doc = await Property.findByIdAndUpdate(req.params.id, body, {
    new: true,    
  });

  if (!doc) {
    res.status(404);
    throw new Error("No document found with that ID.");    
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: doc
    }
  });
})

exports.deleteProperty = asyncHandler(async (req, res) => {
  const doc = await Property.findByIdAndDelete(req.params.id);

    if (!doc) {
      res.status(404);
      throw new Error("No document found with that ID.");
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
})

exports.getPropertyDetailsById = asyncHandler(async (req, res) => {
	try {
		const properties = await Property.findOne({
			_id: req.params.id,
		});
		console.log(properties, "SEND");
		if (properties) {
			res.json(properties);
		} else {
			res.status(400);
			throw new Error("Properties not found");
		}
	} catch (e) {
		res.status(400);

		throw new Error(e.message);
	}
});

exports.getImage = asyncHandler(async(req, res) => {
  try{
    const key = req.params.key;
    const readStream = getFileStream(key);

    readStream.pipe(res);
  }
  catch(err){
    res.status(400);

    throw new Error(err.message);
  }
})

exports.getNearbyPlaces = asyncHandler(async(req, res) => {
  try{
    const {
      latitude,
      longitude
    } = req.body;

    const places = await Property.find();

    let data = [];

    await Promise.all(
      places.map(async (place) => {
        if(place.latitude){
          if(helper.checkDistance(latitude, longitude, place.latitude, place.longitude) <= 100){            
            data.push(place);
          }
        }
      })
    )    

    return res.json({
      status: "success",
      data: data
    })
  }
  catch(err){
    res.status(400);

    throw new Error(err.message);
  }
})