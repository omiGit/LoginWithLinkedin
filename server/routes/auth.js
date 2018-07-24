const passport = require('passport');
module.exports = (app)=>{
    
    app.get('/auth/linkedin',
    passport.authenticate('linkedin', { state: 'SDLFJSKLDFJKLSDF'  }));

    app.get('/auth/linkedin/callback', passport.authenticate('linkedin'),
    (req,res)=>{
        console.log('done asdfsdf');
    res.redirect('/');
    });

    app.get('/user/profile',(req,res)=>{
        console.log('profile',req.user);
        res.send(req.user)
    });
    app.get('/user/logout',(req,res)=>{
       
        req.logOut(); res.redirect('/')
    });
    // app.get('/user/me',(req,res)=>{
    //     console.log(req.user);
    //     res.send(req.user);
    // })
    // app.get('/user/logout',(req,res)=>{
    //     req.logout();
    //     res.redirect('/');
    // })
}