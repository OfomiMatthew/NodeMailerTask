# NodeMailerTask![nodeMailer](https://user-images.githubusercontent.com/62011691/179739031-c79a06d6-591b-495d-88e8-09d4bc9bd579.png)

Approach to sending email:
nodemailer module was imported using require(‘nodemailer’).
nodemailer.createTransport() function created a transporter who will send mail. It contains the service name and authentication details (username and password).
mailDetails was created that contains the sender and receiver email id, subject and content of the mail.
transporter.sendMail() function  sent a email from sender to receiver. If message sending failed or contains error then it will display error message otherwise message is successfully sent.
