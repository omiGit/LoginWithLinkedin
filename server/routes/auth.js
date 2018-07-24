const passport = require('passport');
module.exports = (app)=>{
    
    app.get('/auth/linkedin',passport.authenticate('linkedin', { state: 'SDLFJSKLDFJKLSDF'  }));
    app.get('/auth/linkedin/callback', function(req, res, next) {
    passport.authenticate('linkedin', function(err, user, info) {
      if (err) { return res.redirect('/'); }
      if (!user) { return res.redirect('/'); }
      req.logIn(user, function(err){
        return res.redirect('/');
     });
    })(req, res, next);
  });
    app.get('/user/profile',(req,res)=>{
        res.send(req.user)
    });
    app.get('/user/logout',(req,res)=>{
        req.logOut(); res.redirect('/')
    });
   
}