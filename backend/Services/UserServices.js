import bcrypt from "bcrypt";
import User from "../models/User";

const userService = {
    getUserDetails: async (userId) => {

    },
    createUser: async (userId)  => {

    },

    deleteUser: async (userId) => {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error("User not found");
            }
            user.is_active = false;
            await user.save();
            return true;
        } catch (error) {
            throw new Error(`Error deleting user: ${error.message}`);
        }
    },

    changePassword: async (userId, currentPassword, newPassword) => {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error ("User not found");
            }
            const isMatch = await user.comparePassword(currentPassword);
            if(!isMatch) {
                throw new Error("Current password is incorrect");
            }
            user.password = await bcrypt.hash(newPassword, 10);
            await user.save();
            return true;
        } catch (error) {
            throw new Error(`Error changing password: ${error.message}`);
        }
    },

}

const getUserDetails = async(userId) => {
    try {
        const user = await User.findById(userId).select('-password');
        if (!user) {
            throw new Error("User not found.");
        }
        return user;
    } catch (error) {
        throw new Error(`Error fetching user: ${error.message}`);
    }
};

const createUser = async (userData) => {
    try{
        const existingUser = await User.findOne({email: userData.email});
        if (existingUser) {
            throw new Error("User with this email already exists.");
        }
        const newUser = new User({userData});
        await newUser.save();

        const {password, ...userWithoutPassword} = newUser.toObject();
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
};

const updateUser = async (userId, updates) => {
    try{
        if (updates.password) {
            throw new Error(`Use changePassword service to update password.`);
        }

        const updateUser = await User.findByIdAndUpdate(
            userId,
            {$set: updates},
            {new: true, runValidators: true}
        ).select("-password");

        if(!updateUser) {
            throw new Error('User not found')
        }
    } catch (error) {
        throw new Error(`Error updating user: ${error.message}`);
    }
};

export default userService;