const User=require("../models/user.model");

const createUser = async (req, res) => {
	try {
		
		const user = new User(req.body);
        await user.save();
		return res.status(201).json({message:"User created",user});
	} catch (error) {
		return res.status(500).json({
			message: "Failed to create user",
			error: error.message,
		});
	}
};

module.exports = { createUser };