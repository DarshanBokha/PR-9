const passport = require('passport')

const userTbl = require('../models/ragisterTbl');
const { response } = require('express');

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'skg';

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    try {
        let user = await userTbl.findOne({email : jwt_payload.payload.email})
        if(user){
            return done(null,user)
        }
        else{
            return done(null,false)
        }
    } 
    catch (err) {
       return done(null,err)
    }
}));