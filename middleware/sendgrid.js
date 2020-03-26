const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');

sgMail.setApiKey(keys.sendgridKey);

const sendInquiryEmail = (email, name, phone, address, message) => {
    sgMail.send({
      to: "Hembysam4@gmail.com",
      from: email,
      subject: "Rental Inquiry",
      text: `See the below customer details:

            Name: ${name}
            Phone: ${phone}
            Mailing: ${address}
            Message: ${message}`
    });
}

module.exports = {
    sendInquiryEmail
}