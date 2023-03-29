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
    
    const pageType = 'p1';
    const subject = 'wafs';
    const title = 'Web app from scratch';
    res.render('pages/form', {
        pageType,
        subject,
        title
    });
});


export default form;