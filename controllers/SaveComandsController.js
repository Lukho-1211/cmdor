const User = require('../models/userModel')

exports.getComands = async(req, res) =>{
   console.log('method works');
   const user = await User.find();
    res.status(200).json({
        status: "im good",
        data:{
            data: user
        }
    });
}