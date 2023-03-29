import express from 'express';
import { awnsers } from '../data/awnser.js'

const form = express.Router();

form
    .get('/', (req, res) => {
        const pageType = 'p1';
        const subject = 'bt';
        const title = 'Browser technologies';
        res.render('pages/form', {
            pageType,
            subject,
            title
        });
    })

    .post('/p1', (req, res) => {
        const objIndex = awnsers.findIndex((obj => obj.pageNumber == 1));
        const obj = { 
            pageNumber: 5,
            subject: 'bt',
            professor: req.body.professor,
            weeks: req.body.weeks,
            teaching: req.body.teaching,
        };
        
        awnsers.push(obj)
        
        const pageType = 'p2';
        const subject = 'bt';
        const title = 'Browser Technologies';
        res.render('pages/form', {
            pageType,
            subject,
            title
        });
    })
    
    .post('/p2/', (req, res) => {
        const objIndex = awnsers.findIndex((obj => obj.pageNumber == 2));
        
        const obj = { 
            pageNumber: 6,
            subject: 'bt',
            grading: req.body.grading,
            difficulty: req.body.difficulty,
            insight: req.body.insight,
            feedback: req.body.feedback,
        };

        awnsers.push(obj);

        const currentSubject = 'Browser Technologies';
        const nextSubject = 'Progressive Web app';
        const subject = 'pwa';

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