const express = require("express");
const router = express.Router();
module.exports = router;

const MyText = require("./storeTextSchema");

router.post("/", async(req, res) => {

    let text = MyText({

        text: req.body.text
    })

    await text.save();

    res.status(200).json({'msg':'Text added in Database'});
})