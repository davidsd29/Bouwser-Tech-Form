import express from 'express';
import { awnsers } from '../data/awnser.js'

const form = express.Router();

form
    .post('/p1', (req, res) => {
        const objIndex = awnsers.findIndex((obj => obj.pageNumber == 1));
        const obj = { 
            pageNumber: 1,
            subject: 'wafs',
            professor: req.body.professor,
            weeks: req.body.weeks,
            teaching: req.body.teaching,
        };
        
        awnsers.push(obj)
        
        const pageType = 'p2';
        const subject = 'wafs';
        const title = 'Web app from scratch';
        res.render('pages/form', {
            pageType,
            subject,
            title
        });
    })
    
    .post('/p2/', (req, res) => {
        const objIndex = awnsers.findIndex((obj => obj.pageNumber == 2));
        
        const obj = { 
            pageNumber: 2,
            subject: 'wafs',
            grading: req.body.grading,
            difficulty: req.body.difficulty,
            insight: req.body.insight,
            feedback: req.body.feedback,
        };

        awnsers.push(obj);

        const currentSubject = 'Web app from scratch';
        const nextSubject = 'CSS to the rescue';
        const subject = 'cttr';

        console.log(awnsers)
        res.render('pages/break', {
            currentSubject,
            nextSubject,
            subject
        });
    }) 
    
    .get('/p1/:action', (req, res) => {
        if (req.params.action == 'back'){

        }

        const pageType = 'p1';
        res.render('pages/form', {
            pageType
        });
    })
    
export default form;