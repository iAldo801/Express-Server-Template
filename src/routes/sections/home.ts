import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {

    res.render("sections/home")

});

module.exports = router;