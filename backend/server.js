const express = require('express');
const mongoose = require('mongoose');
const User = require('./User');
const admin = require('./admin');
const Book = require('./Booking')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require("cors");
// const { Admin } = require('mongodb');

// const person=require('./utils/envParser')
const app = express();

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://Mathiyalagan:umamolliyanmohan@cluster0.63ekzt3.mongodb.net/";
// const dbName='test'
mongoose.connect(dbURI)
  .then(result => {
    app.listen(3000)
    console.log("Db connected")
    console.log("Listening to port")

  })
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/add', (req, res) => {
  const user = new User({  //user is a document
    email: "mathi@gmail.com",
    name: "mathi",
    password: "12345"
  })
  user.save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))



})


app.get('/get', (req, res) => {
  User.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err))
})
// app.get('./get-admin',(req,res)=>{
//   admin.find()
//        .then((result)=>res.send(result))
//        .catch((err)=>console.log(err))
// })
app.get('/get-book', (req, res) => {
  Book.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err))
})
app.post('/add-user', (req, res) => {
  const data = req.body;
  const { cp, email, password, username } = data;

  const user = new User({  //user is a document
    email: email,
    name: username,
    password: password
  })
  user.save()
    .then((result) => console.log(result))
    .catch((err) => console.log(err))




})


app.post('/send-email', (req, res) => {
  const data = req.body
  const { email, lname } = data

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "mathiyalaganm118@gmail.com",
      pass: "wiidkeknfvsbeazf",
    },
  });

  async function main(email, lname) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Mathi Bike and Car Services" <mathiyalaganm118@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Logged in succesfully", // Subject line
      text: `Hello ${lname}.Welcome to Mathi Bike and car services`, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
  }
  main(email, lname).catch(console.error);
})
app.post('/send-port-email', (req, res) => {
  const data = req.body
  const { name,email,msg} = data

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "mathiyalaganm118@gmail.com",
      pass: "wiidkeknfvsbeazf",
    },
  });

  async function main(email,name,msg) {
   
    const info = await transporter.sendMail({
        from: '"Mathiyalagan" <mathiyalaganm118@gmail.com>', // sender address
        to: 'mathiyalaganm118@gmail.com', // list of receivers
        subject: "", // Subject line
        text: `New person named ${name} from the email ${email} contacts you for the reason ${msg}.`, // plain text body
      });
    console.log("Message sent: %s", info.messageId);
  }
  main(email, name,msg).catch(console.error);
})
app.post('/book', (req, res) => {
  const bookingData = req.body;
  const { number, date, selectedOption, email } = bookingData

  const book = new Book({
    number: number,
    date: date,
    selectedOption: selectedOption,
    email: email
  })

  book.save()
    .then((result) => console.log(result))
    .catch((err) => console.log(err))



  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "mathiyalaganm118@gmail.com",
      pass: "wiidkeknfvsbeazf",
    },
  });

  async function main(number, date, selectedOption, email) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Mathi Bike and Car Services" <mathiyalaganm118@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Confimation of booking", // Subject line
      text: `Your booking for the service ${selectedOption} for bike number:${number} will be completed before ${date}.Thank you! `, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
  }
  main(number, date, selectedOption, email).catch(console.error);
})

app.post('/delete', (req, res) => {
  const id = req.body;
  console.log(id)

  Book.findByIdAndDelete(id.id)
    .then((result) => console.log("Document deleted"))
    .catch((err) => console.log(err))
})

app.get('/get-admin', async (req, res) => {
  try {
    const data = await admin.find()
    res.send(data)
  }
  catch (error) {
    console.log(error);
  }

})

