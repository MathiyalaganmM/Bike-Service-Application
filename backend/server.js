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
    .then((result) => res.send(result))
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




// register view engine
// app.set('view engine', 'ejs');

// // middleware & static files
// app.use(express.static('public'));

// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });

// // mongoose & mongo tests
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'new blog',
//     snippet: 'about my new blog',
//     body: 'more about my new blog'
//   })

//   blog.save()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// app.get('/single-blog', (req, res) => {
//   Blog.findById('5ea99b49b8531f40c0fde689')
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// app.get('/', (req, res) => {
//   res.redirect('/blogs');
// });

// app.get('/about', (req, res) => {
//   res.render('about', { title: 'About' });
// });

// // blog routes
// app.get('/blogs/create', (req, res) => {
//   res.render('create', { title: 'Create a new blog' });
// });

// app.get('/blogs', (req, res) => {
//   Blog.find().sort({ createdAt: -1 })
//     .then(result => {
//       res.render('index', { blogs: result, title: 'All blogs' });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// // 404 page
// app.use((req, res) => {
//   res.status(404).render('404', { title: '404' });
// });
