const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
	selectFrom,
	insertInto,
	deleteFrom,
	updateSet,
} = require("../database/system.functions");

const table_name = require("../database/system.info").DB_TABLES.users;

router.post("/users/login", async (req, res) => {
	// Our login logic starts here
	try {
		// Get user input
		const { email, password } = req.body;

		// Validate user input
		if (!(email && password)) {
			res.status(400).send("All input is required");
		}
		// Validate if user exist in our database
		const user = await selectFrom(table_name, { email }).then(
			(arrayOfUsers) => arrayOfUsers[0]
		);

		if (user && (await bcrypt.compare(password, user.password))) {
			// Create token
			const token = jwt.sign(
				{ user_id: user._id, email },
				process.env.TOKEN_KEY,
				{
					expiresIn: "20s",
				}
			);

			// save user token
			user.token = token;
			// remove password before sending it to the client
			delete user.password;
            
			// user
			res.status(200).json(user);
		}
		res.status(400).send("Invalid Credentials");
	} catch (err) {
		console.log(err);
	}
	// Our register logic ends here
});

module.exports = router;
