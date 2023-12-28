const express = require("express");
const auth = require("./routes/auth");
require("dotenv").config({ override: false });

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
		return process.exit(1);
	}
	app.use("/api/auth", auth);
	console.log(`Server is running on ${PORT}`);
});
