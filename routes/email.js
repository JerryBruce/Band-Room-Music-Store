const express = require("express");
const { sendInquiryEmail } = require("../middleware/sendgrid");

router = express.Router();

router.post("/inquiry", (req, res) => {
  console.log(req.body);
  const data = { ...req.body };

  try {
    if (
      !data.email ||
      !data.first ||
      !data.last ||
      !data.message ||
      !data.subject
    ) {
      res.status(400).send("Please enter the required fields");
    }
    sendInquiryEmail(data);

    res.status(201).send("Email Sent");
  } catch (e) {
    res.send(500).status();
  }
});

module.exports = router;
