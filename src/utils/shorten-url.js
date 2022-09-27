require("dotenv").config();

const axios = require("axios");
const token = process.env.BITLY_TOKEN;

const bitlyEndpoint = "https://api-ssl.bitly.com/v4/shorten";

const shortenUrl = async (url) =>
	await axios
		.post(
			bitlyEndpoint,
			{ long_url: url },
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		)
		.then((response) => response.data.link)
		.catch((error) => {
			console.error(error.message);
		});

module.exports = {
	shortenUrl,
};
