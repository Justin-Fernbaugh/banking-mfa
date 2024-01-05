const { Router } = require("express");
const router = Router();
const OTPAuth = require("otpauth");
let generateSecret = require("../helpers/generateSecret");
let mySecret = generateSecret(12);
let totp = new OTPAuth.TOTP({
	issuer: "ACME",
	label: "AzureDiamond",
	algorithm: "SHA1",
	digits: 6,
	period: 30,
	secret: mySecret,
});

router.get("/", async function (req, res) {
	// Generate a token (returns the current token as a string).
	let token = totp.generate();

	// Validate a token (returns the token delta or null if it is not found in the search window, in which case it should be considered invalid).
	let delta = totp.validate({ token, window: 1 });
	if (delta) return res.status(500).json({});

	return res.status(200).json({ otp: token });
});

router.post("/", async function (req, res) {
	const token = req.query.token;
	let myToken = totp.generate();

	if (token == myToken) return res.status(200).send("Valid");
	return res.status(400).send("Invalid");
});

router.delete("/", async function (req, res) {
	const newSecret = generateSecret(12);
	totp = new OTPAuth.TOTP({
		issuer: "ACME",
		label: "AzureDiamond",
		algorithm: "SHA1",
		digits: 6,
		period: 30,
		secret: newSecret,
	});
	res.status(203).send("Refreshed");
});

module.exports = router;
