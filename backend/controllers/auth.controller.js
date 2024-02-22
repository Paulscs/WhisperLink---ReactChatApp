export const login = (req, res) => {
    console.log("loginUser");
};

export const signup =  async (req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
    } catch (error){

    }
};

export const logout = (req, res) => {
    console.log("logoutUser");
};