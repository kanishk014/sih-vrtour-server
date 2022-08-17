const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			// required: true,
			ref: "User",
		},
		title: {
			type: String,
			// required: true,
		},
		propertyImage: {
			type: String,
			// required: true,
		},		
		price: {
			type: Number,
			// required: true,
		},				
		sqft: {
			type: Number,
			// required: true,
		},
    landArea: {
      type: Number,
    },
		type: {
			type: String, //  1 -> temple
			// required: true,
		},		
		builtYear: {
			type: String,
			// required: true,
		},
		parkingSpaces: {
			type: Number,
			// required: true,
		},
		address: {
			type: String,
			// required: true,
		},
    timings: {
      type: String,
    },
    aartiTime: {
      type: String,      
    },
    tourTime: {
      type: String,
    },
    about: {
      type: String,
    },
    factsAndFigures: {
      type: String,
    },
    famous: {
      type: String,
    },
		activities: {
      type: [String],
    },
		feel360: {
			type: String,
			// required: true,
		},
    mapLocation: {
      type: String,
    },
    video: {
      type: String,
    },
    websiteUrl: {
      type: String,
    }
	},
	// Mongoose schemas have a timestamps option that tells Mongoose
	//to automatically manage createdAt and updatedAt properties on your documents.
	{ timestamps: true }
);

const property = mongoose.model("property", propertySchema);

exports.Property = property;
