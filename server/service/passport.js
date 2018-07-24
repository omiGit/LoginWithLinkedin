const passport = require('passport');
const LinkedInStrategy =  require('passport-linkedin-oauth2').Strategy;

const _ = require('lodash');
passport.serializeUser((user,done)=>{
    done(null,user)
  });
  passport.deserializeUser((user,done)=>{
    done(null,user);
  });

passport.use(new LinkedInStrategy({
    clientID: "81oqzohars51lw",
    clientSecret:"78VvK6NIPrWAM3KO",
    callbackURL: "/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile'],
    proxy: true
  }, function(accessToken, refreshToken, profile, done) {
    let userProfile = _.omit(profile._json,['firstName','lastName','apiStandardProfileRequest']);
    userProfile = {...userProfile,
    location:{ ...userProfile.location,country:userProfile.location.country.code,},
    pictureUrls:[...userProfile.pictureUrls.values],
    siteStandardProfileRequest: userProfile.siteStandardProfileRequest.url
    } 
    console.log(userProfile)
    done(null, userProfile);
  }));

  module.exports = passport;