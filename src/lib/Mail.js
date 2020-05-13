import nodemailer from 'nodemailer';
import exphbs from 'express-handlebars';
import nodemailerhbs from 'nodemailer-express-handlebars';
import { resolve } from 'path';

import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth : null,
    });

    this.configureTemplates();
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }

  configureTemplates() {
    const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails');
    const handlebarOptions = {
      viewEngine: {
        extname: '.hbs',
        partialsDir: resolve(viewPath, 'partials'),
        layoutsDir: resolve(viewPath, 'layouts'),
        defaultLayout: 'default',
      },
      viewPath,
      extName: '.hbs',
    };

    this.transporter.use('compile', nodemailerhbs(handlebarOptions));
  }
}

export default new Mail();
