const router = require("express").Router();
const viewsController = require("../controller/viewsController");

router.get("/", viewsController.homePage);

module.exports = router;
