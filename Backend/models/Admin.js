const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"],
        select: false
    }


} ,{timestamps: true});


//encapsulate the password hashing logic in a pre-save hook

adminSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next();
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

adminSchema.methods.comparePassword = async function (matchedPassword) {
    return await bcrypt.compare(matchedPassword, this.password);
    
}