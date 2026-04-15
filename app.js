const express = require("express");
const routes = require("./router/routes");
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user;
    res.locals.role = req.session.user?.role;
  next();
});

mongoose.connect("mongodb://10.12.7.151:27017/vindIL")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

//routes
app.use('/', routes);

app.use((req, res) => {
    res.status(404).send('404 - Page not found');
});

app.listen(3000, ()=> {
    console.log("Site is running on port 3000");
});