const passport = require('passport');
module.exports = (app)=>{
    
    app.get('/auth/linkedin',
    passport.authenticate('linkedin', { state: 'SDLFJSKLDFJKLSDF'  }));

//     app.get('/auth/linkedin/callback', passport.authenticate('linkedin',{
//         successRedirect: '/',
//         failureRedirect: '/'
//     })
//    // (req,res)=>{
//      //   console.log('done asdfsdf');
//     //res.redirect('/');
//     //}
// );
app.get('/auth/linkedin/callback', function(req, res, next) {
    passport.authenticate('linkedin', function(err, user, info) {
      if (err) { return res.redirect('/'); }
      if (!user) { return res.redirect('/'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/users/' + user.username);
      });
    })(req, res, next);
  });
    app.get('/user/profile',(req,res)=>{
        console.log('profile',req.user);
        res.send(req.user)
    });
    app.get('/user/logout',(req,res)=>{
       
        req.logOut(); res.redirect('/')
    });
   
}