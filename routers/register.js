import express from 'express';
import { users } from '../data/user.js'
import ValidateUser  from '../controllers/register.js'


const form = express.Router();

form.get('/', (req, res) => {

    const student = { 
        first_name: req.query.first_name,
        surname: req.query.surname,
        student_nmbr: req.query.student_nmbr,
        email: req.query.email,
    };

    console.log(student) 


    const userIsValid = ValidateUser(student);

    if (userIsValid) users.push(student)
    
    const pageType = "p1";
    res.render("pages/wafs", {
        pageType
    });
});


export default form;