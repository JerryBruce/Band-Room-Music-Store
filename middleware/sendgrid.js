const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");

sgMail.setApiKey(keys.sendgridKey);

const sendInquiryEmail = data => {
  const { email, name, phone, address, message } = data;
  sgMail.send({
    to: keys.email,
    from: email,
    subject: "Rental Inquiry",
    text: `See the below customer details:

            Name: ${name}
            Phone: ${phone}
            Mailing: ${address}
            Message: ${message}`
  });
};

module.exports = {
  sendInquiryEmail
};
