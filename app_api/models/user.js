const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"],
        username: String,
        unique: [true, "Username taken"],
    },
    pswd: {
        type: String,
        required: true,
        minLength: [10, "Minimum password length is 10"],
    },
    pswd_confirm: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "Email is required"],
        unique: true,
    },
    // uploadedVideo
    // uploadedImage
    address: String,
    facilities: [String]
});

mongoose.model('user', userSchema);