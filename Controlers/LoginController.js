const User = require("../Model/LoginSchema");

exports.addUser = (req, res) => {
  const user = new User({
    UserName: req.body.UserName,
    Password: req.body.Password,
    
  });
  //  CustomerName:String
  //  CustomerAddress:String,
  // CustomerMobNo:Number,
  // CustomerCity:String,
  // CustomerPassword:String,

  user
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.getAllUser = (req, res) => {
    User.find()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
  exports.doLogin = (req, res) => {
    User.findOne({
      CustomerEmail: req.body.CustomerEmail,
      CustomerPassword: req.body.CustomerPassword,
    })
      .then((result) => {
        if (result) {
          res.status(200).json({
            data: result,
            success: true,
          });
        } else {
          res.status(200).json({
            data: {},
            success: false,
          });
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
  