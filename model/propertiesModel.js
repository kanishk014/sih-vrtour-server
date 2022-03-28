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
			type: String,
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
			type: String,
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
		location: {
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
		feel_360: {
			type: String,
			// required: true,
		},
    map_location: {
      type: String,
    },
    video: {
      type: String,
    },
    book_ticket: {
      type: String,
    }
	},
	// Mongoose schemas have a timestamps option that tells Mongoose
	//to automatically manage createdAt and updatedAt properties on your documents.
	{ timestamps: true }
);

const property = mongoose.model("property", propertySchema);

exports.Property = property;
