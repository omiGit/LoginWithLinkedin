const express = require('express');
const app = express();
const passport = require('./server/service/passport');
const {cookie} = require('./config/keys');
const bodyParser = require('body-parser');
const cookieSession =  require('cookie-session');
const {auth:{linkdin}} = require('./config/keys');
const path = require('path');
const _ = require('lodash');



app.use(bodyParser.json());
app.use(cookieSession({
    maxAge:cookie.maxAge,
    keys:cookie.keys
}));
app.use(passport.initialize());
app.use(passport.session());

require('./server/routes/auth')(app);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

app.listen(4000);