require("dotenv").config();

const axios = require("axios");
const token = process.env.BITLY_TOKEN;

/**
 * @param {Function} callback [required]
 * @param {Function} errorCallback [required]
 * @param {String} url [required]
 */

async function shorten(url) {
	const data = { long_url: url };

	const response = await fetch("", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((response) => {
		if (!response.ok) {
			return `HTTP error! status: ${response.status};`;
		}

		return response.json();
	});

	return await response;
}

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
	shorten,
	shortenUrl,
};
