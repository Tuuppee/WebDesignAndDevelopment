import userService from "../Services/UserServices.js";

const UserController = {
    getUserDetails: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await userService.getUserDetails(userId);
            res.status(200).json({ status: "success", data: user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await userService.getUserDetails(userId);
            res.status(200).json({ status : "success", data: user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const updateData = req.body;
            const user = await userService.updateUser(userId, updateData);
            res.status(200).json({ status: "success", data: user});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const deleteUser = req.body;
            const user = await userService.updateUser(userId, updateData);
            res.status(200).json({ status: "success", data: user});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    changePassword: async (req, res) => {
        try{
            const userId = req.params.id;
            const { current_password, new_password } = req.body;
            await userService.changePassword(userId, current_password,  new_password)
            res
                .status(200)
                .json({ status: "success", message: "Password changed successfully:"})
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}