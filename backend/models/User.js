import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
    {
        username: {type : String, required: true, unique: true},
        email: {type : String, required: true, unqiue: true},
        password: {type : String, required: true},
        first_name: {type : String},
        last_name: {type : String},
        date_of_birth: {type : String},
        address: {type : String},
        contact: {type : String, required: true},
        is_active: {type : Boolean, default: true},
        role: {
            type: String,
            enum: ['admin', 'user', 'moderator'], 
            default: "user"
        },
    },
    {
        timestamps: true,
    }
);

UserSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
});

export default mongoose.model("User", UserSchema);