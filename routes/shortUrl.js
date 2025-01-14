const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const URl = require("../models/urlModel");
const Url = require("../models/urlModel");
const baseUrl = "http://localhost:3000/urlapi/";

router.post("/", async (req, res) => {
  try {
    const longUrl = req.body.longUrl;
    const shorturl = baseUrl + shortid.generate();
    // console.log(typeof shortId, typeof longUrl);
    // console.log(shortId.urlAlphabet, longUrl);

    const storeUrl = await URl.create({
      longUrl,
      shortUrl: shorturl,
    });

    return res.status(200).json({
      shortUrl: storeUrl.shortUrl,
    });
  } catch (error) {
    // console.log(error);

    return res.status(501).send(error);
  }
});

router.get("/:short", async (req, res) => {
  let shortId = req.params.short;
  console.log(shortId);
  let url = await Url.findOne({
    where: {
      shortUrl: `${baseUrl}${shortId}`,
    },
  });
  if (!url) {
    return res.status(404).send("Enter Valid Code!!");
  }
  res.redirect(url.longUrl);
});

module.exports = router;
