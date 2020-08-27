var express = require("express");
var router = express.Router();
var axios = require("axios");
var parseString = require("xml2js").parseString;

router.get("/", async function (req, res, next) {
  const reqUrl = req.query.url;
  try {
    const reqRes = await axios.get(reqUrl, {
      timout: 10000,
    });
    if (reqRes.data === null) {
      console.error(
        `Invalid response - Status ${reqRes.status} - data: ${JSON.stringify(
          reqRes.data
        )}`
      );

      res.status(400).json({
        desc: "Request failed - Invalid response",
      });
      return;
    }

    let ress;

    parseString(reqRes.data, (err, result) => {
      ress = result;
    });

    res.status(200).json({
      data: ress,
    });
  } catch {
    console.error(`Request Failed!`);

    res.status(400).json({
      desc: "Request failed",
    });
    return;
  }
});

module.exports = router;
