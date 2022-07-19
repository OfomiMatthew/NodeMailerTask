const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:'ofomimatthew7@gmail.com',
    pass:'eainnghfloawbsdf'
  }
});

let mailDetails = {
  from:'ofomimatthew7@gmail.com',
  to:'ofomimatthew7@gmail.com',
  subject:'Zuri task test',
  text:'Nodemailer task in motion for zuri internship'
}

transporter.sendMail(mailDetails, function(err,date){
if(err){
  console.log(err)
}
else{
  console.log('Email successfully sent')
}
})

