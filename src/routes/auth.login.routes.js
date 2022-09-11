const router = require("express").Router();

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
			(response) => response[0]
		);

		if (user && (await bcrypt.compare(password, user.password))) {
			// Create token
			const token = jwt.sign(
				{ user_id: user._id, email },
				process.env.TOKEN_KEY,
				{
					expiresIn: "2h",
				}
			);

			// user
			res.status(200).json({ ...user, token });
		}
		res.status(401).send("Invalid Credentials");
	} catch (err) {
		res.status(400).send({
			message: "An error occurred while processing your request",
			payload: err,
		});
	}
	// Our register logic ends here
});

module.exports = router;
