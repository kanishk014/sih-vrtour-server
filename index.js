require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;
const userRouter = require("./routes/userRouter");
const meetingRouter = require("./routes/meetingRoutes");
const donationRouter = require("./routes/donationRoutes");
const adminRouter = require("./routes/adminRoutes");
const bookingRouter = require("./routes/bookingRoutes");

const propertyRouter = require("./routes/propertyRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");


app.use(
  cors({
    origin: "*",
	})
  );

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));
app.use("/uploads/propertyImages", express.static("uploads/propertyImages"));
  
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV == "development") {
	//middleware
	app.use(morgan("dev"));
}
const mongodb = process.env.MONGO_URI;
mongoose
	.connect(mongodb, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Mongodb is connected");
	})
	.catch((e) => {
		console.log("Mogodb not connected");
	});
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use("/api/meet", meetingRouter);

app.use("/api/users", userRouter);
app.use("/api/property", propertyRouter);
app.use("/api/bookings", donationRouter);
app.use("/api/ticketBooking", bookingRouter);
app.use("/api/admin", adminRouter);

app.get("/",(req,res)=>{
    res.json("Home")
})


app.use(notFound);
//Error middleware
//api right but doesnot match value
app.use(errorHandler);
app.listen(port, () => {
	console.log(`Server listens at http://localhost:${port}`);
});
