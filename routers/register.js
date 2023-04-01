import express from 'express';
import { users } from '../data/user.js'
import { answers } from '../data/answer.js'


const form = express.Router();

form
    .get('/', (req, res) => {
        res.render('pages/register');
    })

    .post('/', (req, res) => {

        const student = { 
            first_name: req.query.first_name,
            surname: req.query.surname,
            student_nmbr: req.query.student_nmbr,
            email: req.query.email,
        };

        users.push(student)
        answers.splice(0,answers.length)

        res.render('pages/index');
    })


export default form;