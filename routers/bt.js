import express from 'express';
import { answers } from '../data/answer.js';

const form = express.Router();
const queryString = (req) => req._parsedUrl.search;
const searchParts = (req) => req.split('/');


form
	.get('/p1', (req, res) => {
		const searchArray = searchParts(req._parsedOriginalUrl.pathname)
        let values = answers.find((object) => { if (object.subject == searchArray[1] && object.pageNumber == 'p5') return object}) || {};

		const pageType = 'p1';
		const subject = 'bt';
		const title = 'Browser Technologies';
		res.render('pages/form', {
			pageType,
			subject,
			title,
			values
		});
	})

	.get('/p2/', (req, res) => {
		const searchArray = searchParts(req._parsedOriginalUrl.pathname)
        let values = answers.find((object) => { if (object.subject == searchArray[1] && object.pageNumber == 'p6') return object}) || {};

		const obj = {
			pageNumber: 'p5',
			subject: 'bt',
            title: 'Browser Technologies',   
            teaching: req.query.teaching,
            grading: req.query.grading,
            difficulty: req.query.difficulty,
		};

		answers.push(obj);

        const pageType = 'p2';
		const subject = 'bt';
		const title = 'Browser Technologies';

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
			pageNumber: 'p6',
			subject: 'bt',
            title: 'Browser Technologies',   
			insight: req.query.insight,
            feedback: req.query.feedback,

		};

		answers.push(obj);

		const subjectAmount = 1;
		const currentSubjectShort = 'bt'
        const currentSubject = 'Browser Technologies';
        const nextSubject = 'Progressive Web app';
        const subject = 'pwa';

		res.render('pages/break', {
			query: queryString(req),
            currentSubjectShort,
			currentSubject,
			subjectAmount,
			nextSubject,
			subject,
		});
	});

export default form;
