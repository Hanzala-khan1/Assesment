const { addworksheet, getworksheet } = require("../controller/worksheet");

const Router = require("express").Router();

Router.post("/addworksheet", addworksheet);
Router.get("/getworksheet", getworksheet);

module.exports = Router;
