const mongoose = require('mongoose');
require("dotenv").config();
mongoose.connect(process.env.DB_URL);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 60
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    firstName: {
        type: String,
        maxLength: 50
    },
    lastName: {
        type: String,
        maxLength: 50
    }
});
userSchema.methods.createHash = async function(plainText){
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(plainText, salt);
};
userSchema.methods.validateHash = async function(candidatePasword){
    return await bcrypt.compare(candidatePasword,this.password);
}
const User = new mongoose.model("User",userSchema);
module.exports = {
    User
}