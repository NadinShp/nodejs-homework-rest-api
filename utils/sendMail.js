const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const {SENDGRID_KEY} = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const sendMail = async ({to, subject, text, html}) => {
    const mail = {
        to,
        from: 'deservinglife@i.ua',
        subject,
        text,
        html,
    };
    try {
        const answer = await sgMail.send(mail);
        return answer;
    } catch(error) {
        throw error;
    }
};

module.exports = sendMail;