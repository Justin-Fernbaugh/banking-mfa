const express = require("express");
const mfa = require("./routes/mfa");
require("dotenv").config({ override: false });

const app = express();

try {
	app.get("/", async (req, res) => {
		res.status(200).send("<h1>Banking Mfa </h1>");
	});
	app.use("/api/mfa", mfa);
} catch (err) {
	console.log(`ERROR app.js: ${err}`);
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
