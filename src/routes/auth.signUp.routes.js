const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Utils = require("../utils");

const {
	selectFrom,
	insertInto,
	deleteFrom,
	updateSet,
} = require("../database/system.functions");

const table_name = require("../database/system.info").DB_TABLES.users;

router.get("/", async (req, res) => {
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

router.put("/users/update/:_id", async (req, res) => {
	await updateSet(table_name, req.params._id, req.body);
});

router.post("/", async (req, res) => {
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
		const oldUser = await selectFrom(table_name, { email }).then(
			(arrayOfUsers) => arrayOfUsers[0]
		);

		if (oldUser) {
			return res
				.status(409)
				.send({ message: "User Already Exist. Please Login" });
		} else {
			//Encrypt user password
			encryptedPassword = await bcrypt.hash(password, 10);

			// Create user in our database
			const user = await selectFrom(table_name, {
				_id: await insertInto(table_name, {
					uuid: Utils.generateGUID(),
					first_name,
					from: "fuse-app",
					role: process.env.PORT === 8080 ? "admin" : "guest",
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

			delete user.password;

			// return new user + token
			res.status(201).json({ ...user, token });
		}
	} catch (err) {
		res.status(409).send({
			message: "An error occurred while processing your request",
			payload: err,
		});
	}
	// Our register logic ends here
});

module.exports = router;
