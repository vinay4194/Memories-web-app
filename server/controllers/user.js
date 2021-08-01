const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const signin = async (req, res) => {
	//get the data from front-end
	const { email, password } = req.body;

	try {
		//find the user
		const existingUser = await User.findOne({ email });

		//if user does not exist
		if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });

		//check the password
		const isPassCorrect = await bcrypt.compare(password, existingUser.password);
		if (!isPassCorrect) return res.status(400).json({ message: "Invalid Credentials" });

		//if password is correct and user exists, Create a token
		const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "test", { expiresIn: "1h" });

		res.status(200).json({ result: existingUser, token });
	} catch (error) {
		res.status(500).json({ message: "Something went wrong" });
	}
};

const signup = async (req, res) => {
	const { email, password, firstName, lastName, confirmPassword } = req.body;

	try {
		//check if the user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) return res.status(400).json({ message: "User already exist" });

		//check if entered passwords match
		if (password !== confirmPassword) return res.status(400).json({ message: "Passwords dont match" });

		//hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		//Create User
		const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
		//Create token for the user
		const token = jwt.sign({ email: result.email, id: result._id }, "test", { expiresIn: "1h" });

		res.status(200).json({ result, token });
	} catch (error) {
		res.status(500).json({ message: "Something went wrong" });
	}
};

module.exports = { signin, signup };
