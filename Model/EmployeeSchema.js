const mongoose=require('mongoose')

const EmployeeSchema=mongoose.Schema({
    EmployeeName:String,
    EmployeeEmail:String,
    EmployeeMobile:Number,
    EmployeeDesignation:String,
    EmployeeGender:String,
    EmployeeCourse:String,
    EmployeeImage:String,
    CreatedDate:{type:Date,default:new Date()}


})

module.exports=mongoose.model('Employee',EmployeeSchema);