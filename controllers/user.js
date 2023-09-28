const User = require("../models/user");
exports.creatuser = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const newUser = new User({
            name,
            email,
            password,
          });
      
      await newUser.save();
      res.status(201).json({
        success: true,
        message: "user created",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  exports.getByName = async (req, res) => {
    try {
        const { email } = req.body;
        console.log(`Email received: ${email}`);
        
        // Check the email variable value
        
        const user = await User.findOne({ email });
        console.log(`User found:`, user);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found with the provided email.",
            });
        }

        res.status(200).json({
            success: true,
            message: {
                name: user.name, // Include the user's name
                email: user.email, // Include the user's email
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
