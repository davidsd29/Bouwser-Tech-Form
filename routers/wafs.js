import express from 'express';
import { awnsers } from '../data/awnser.js'

const form = express.Router();
const queryString = (req) => req._parsedUrl.search;
const searchParts = (req) => req.split('/');


form
    .get('/p1', (req, res) => {
        const searchArray = searchParts(req._parsedOriginalUrl.pathname)
        let values = awnsers.find((object) => { if (object.subject == searchArray[1] && object.pageNumber == searchArray[2]) return object}) || {};
        console.log(values)

        const pageType = 'p1';
        const subject = 'wafs';
        const title = 'Web app from scratch';
        res.render('pages/form', {
            pageType,
            subject,
            title,
            values
        });
    })  
    
    .get('/p2', (req, res) => {
        const searchArray = searchParts(req._parsedOriginalUrl.pathname)
        let values = awnsers.find((object) => { if (object.subject == searchArray[1] && object.pageNumber == searchArray[2]) return object}) || {};

        const obj = { 
            pageNumber: 'p1',
            subject: 'wafs',    
            teaching: req.query.teaching,
            grading: req.query.grading,
            difficulty: req.query.difficulty,
        };
        
        awnsers.push(obj)

        const pageType = 'p2';
        const subject = 'wafs';
        const title = 'Web app from scratch';
        res.render('pages/form', {
            query: queryString(req),
            pageType,
            subject,
            title,
            values
        });
    })
    
    .get('/break/', (req, res) => {
        const obj = { 
            pageNumber: 'p2',
            subject: 'wafs',
            insight: req.query.insight,
            feedback: req.query.feedback,
        };
        
        awnsers.push(obj);
        
        const currentSubject = 'Web app from scratch';
        const currentSubjectShort = 'wafs';
        const nextSubject = 'CSS to the rescue';
        const subjectAmount = 3;
        const subject = 'cttr';
        
        res.render('pages/break', {
            query: queryString(req),
            currentSubjectShort,
            currentSubject,
            subjectAmount,
            nextSubject,
            subject
        });
    });
    
export default form;