const jwt = require('jsonwebtoken');
const User = require('./model/userSchema');

async function generateAuthToken(user){
    const token = await jwt.sign({_id:user._id},"Mynameisshubhampandeyandiamkingofnorthjustlikejohnsnowfromgameofthrones");
    user.tokens = user.tokens.concat({token:token});
    await user.save();
    return token;
}

module.exports = { generateAuthToken };