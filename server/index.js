const express = require("express");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");

const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

//cors => Cross Origin Resource Sharing [to allow api calls b/w front-end(localhost:3000) and back-end(localhost:5000), bcz they are using different servers we need this middleware to avoid CORS errors]
app.use(cors());

//setting the routes
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
	res.send("App is running!!");
});

const PORT = process.env.PORT || 5000;

CONNECTION_URL = "mongodb+srv://vinay:vinay@121@cluster0.zvgwc.mongodb.net/memories?retryWrites=true&w=majority";
//DB connection
mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message));
