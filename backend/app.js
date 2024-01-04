const express = require("express");
const { auth } = require("express-openid-connect");
const mfa = require("./routes/mfa");
// const login = require("./routes/login");
require("dotenv").config({ override: false });

const app = express();

// const config = {
// 	authRequired: false,
// 	auth0Logout: true,
// 	baseURL: process.env.BASE_URL,
// 	clientID: process.env.CLIENT_ID,
// 	issuerBaseURL: `https://${process.env.DOMAIN}/`,
// 	secret: process.env.CLIENT_SECRET,
// };

app.use(auth(config));
try {
	app.get("/", async (req, res) => {
		res.status(200).send("<h1>Banking Mfa </h1>");
	});
	app.use("/login", login);
	app.use("/api/mfa", mfa);
} catch (err) {
	console.log(`ERROR app.js: ${err}`);
}

// app.get("/auth0", (req, res) => {
// 	if (req.oidc.isAuthenticated() === "Logged out") {
// 		res.oidc.login({ returnTo: "/callback" });
// 	} else {
// 		res.redirect("/callback");
// 	}
// });

// app.get("/callback", (req, res) => {
// 	let jwt = req.rawHeaders[15].slice(11, jwt.length);
// 	console.log("Callback authentication");
// 	res.send({ JWT: jwt });
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
