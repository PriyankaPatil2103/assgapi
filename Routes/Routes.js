const express=require('express');
const router=express.Router()

const UserControler=require('../Controlers/LoginController');
router.post('/adduser',UserControler.addUser)
router.get('/getalluser',UserControler.getAllUser)
router.post('/dologin',UserControler.doLogin);

const EmployeeControler=require('../Controlers/EmployeeController');
router.post('/addemployee',EmployeeControler.addEmployee)
router.get('/getallemployee',EmployeeControler.getAllEmployee)
router.post('/updateemployeeinfo',EmployeeControler.updateEmployeeInfo);

module.exports=router