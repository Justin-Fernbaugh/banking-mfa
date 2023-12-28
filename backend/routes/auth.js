const { Router } = require("express");
const router = Router();

router.get("/", async function (req, res) {
	res.status(200).json();
});

module.exports = router;
