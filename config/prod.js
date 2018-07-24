module.exports = {
    auth:{
        linkdin:{
            clientID:process.env.LINKDIN_CLIENT,
            clientSecret:process.env.LINKDIN_SECRET,
            callbackURL: process.env.LINKDIN_REDIRECT
        }
    },
    cookie:{
        maxAge:process.env.COOKIE_AGE,
        keys:process.env.COOKIE_KEYS.split(',')
    }
}
