const Employee = require("../Model/EmployeeSchema");

exports.addEmployee = (req, res) => {
  const employee = new Employee({
    EmployeeName:req.body.EmployeeName,
    EmployeeEmail:req.body.EmployeeEmail,
    EmployeeMobile:req.body.EmployeeMobile,
    EmployeeDesignation:req.body.EmployeeDesignation,
    EmployeeGender:req.body.EmployeeGender,
    EmployeeCourse:req.body.EmployeeCourse,
    EmployeeImage:req.body.EmployeeImage,
    
  });
  //  CustomerName:String
  //  CustomerAddress:String,
  // CustomerMobNo:Number,
  // CustomerCity:String,
  // CustomerPassword:String,

  employee
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.getAllEmployee = (req, res) => {
    Employee.find()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
  exports.updateEmployeeInfo=(req,res)=>{
    Employee.findByIdAndUpdate({_id:req.body.iid},
        {EmployeeName:req.body.updateName},
        {EmployeeEmail:req.body.updateEmail},
        {EmployeeMobile:req.body.updatemobileno},
        {new:true}).then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).send(err);
        });
}