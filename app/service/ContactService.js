const Service = require('egg').Service;
const nodemailer = require('nodemailer');

class ContactService extends Service {
    async sendEmail(addr, subject, content, cc) {
        let smtpConfig = {
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: 'leewayzhang@outlook.com',
                pass: 'Leeway007'
            },
            requireTLS: true
        };

        let transport = nodemailer.createTransport(smtpConfig);

        const verify = await transport.verify();
        if (verify) {
            let message = {
                from: 'leewayzhang@outlook.com',
                to: addr,
                subject: subject,
                text: content
            };
            const result = await transport.sendMail(message);
            return true;
        } else {
            return false;
        }
    }
}

module.exports = ContactService;