import express from 'express';
import { answers } from '../data/answer.js';

const form = express.Router();
const queryString = (req) => req._parsedUrl.search;
const searchParts = (req) => req.split('/');


form
	.get('/p1', (req, res) => {
		const searchArray = searchParts(req._parsedOriginalUrl.pathname)
        let values = answers.find((object) => { if (object.subject == searchArray[1] && object.pageNumber == 'p3') return object}) || {};

		const pageType = 'p1';
		const subject = 'cttr';
		const title = 'CSS to the rescue';
		res.render('pages/form', {
			pageType,
			subject,
			title,
			values
		});
	})

	.get('/p2/', (req, res) => {
		const searchArray = searchParts(req._parsedOriginalUrl.pathname)
        let values = answers.find((object) => { if (object.subject == searchArray[1] && object.pageNumber == 'p4') return object}) || {};

		const obj = {
			pageNumber: 'p3',
			subject: 'cttr',
            title: 'CSS to the rescue',   
            teaching: req.query.teaching,
            grading: req.query.grading,
            difficulty: req.query.difficulty,
		};

		answers.push(obj);

        const pageType = 'p2';
		const subject = 'cttr';
		const title = 'CSS to the rescue';

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
			pageNumber: 'p4',
			subject: 'cttr',
            title: 'CSS to the rescue',   
			insight: req.query.insight,
            feedback: req.query.feedback,

		};

		answers.push(obj);

		const subjectAmount = 2;
		const currentSubjectShort = 'cttr'
		const currentSubject = 'CSS to the rescue';
		const nextSubject = 'Browser Technologies';
		const subject = 'bt';

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
