const express = require ('express');
const mongoose = require ('mongoose');

const users = require ('./routes/api/users');
const profile = require ('./routes/api/profile');
const posts = require ('./routes/api/posts');

const app = express();


//DB config
const db = require('./config/keys').mongoURI;
//connect to mongoDB
mongoose
.connect(db)
.then(() => console.log ('MongoDB connected'))
.catch(err => console.log(err));

 

app.get('/', (req, res) => res.send('Hello World'));

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log('server running on port 4000'));

