const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {
	selectFrom,
	insertInto,
	deleteFrom,
} = require("../database/system.functions");
const table_name = require("../database/system.info").DB_TABLES.users;

router.get("/users", async (req, res) => {
	res.send({
		message: "Everyone in users table",
		payload: await selectFrom(table_name),
	});
});
router.delete("/users/:_id", async (req, res) => {
	await deleteFrom(table_name, req.params._id).then(async () => {
		res.send({
			message: "User removed successfully",
			payload: await selectFrom(table_name),
		});
	});
});
router.post("/register", async (req, res) => {
	// Our register logic starts here
	try {
		// Get user input
		const { first_name, last_name, email, password } = req.body;

		// Validate user input
		if (!(email && password && first_name && last_name)) {
			res.status(400).send("All input is required");
		}

		// check if user already exist
		// Validate if user exist in our database
		const oldUser = await selectFrom(table_name, { email });

		if (oldUser.length >= 1) {
			return res.status(409).send("User Already Exist. Please Login");
		}

		//Encrypt user password
		encryptedPassword = await bcrypt.hash(password, 10);

		// Create user in our database
		const user = await selectFrom(table_name, {
			_id: await insertInto(table_name, {
				first_name,
				last_name,
				email: email.toLowerCase(), // sanitize: convert email to lowercase
				password: encryptedPassword,
			}),
		});

		// Create token
		const token = jwt.sign(
			{ user_id: user._id, email },
			process.env.TOKEN_KEY,
			{
				expiresIn: "2h",
			}
		);

		// return new user + token
		res.status(201).json({ ...user, token });
	} catch (err) {
		console.log(err);
	}
	// Our register logic ends here
});

module.exports = router;
