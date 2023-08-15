import { Request, Response } from "express";

const express = require('express');
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {

    res.json({ name: 'John Doe', age: 30, email: 'johndoe@gmail.com' })

})

module.exports = router;