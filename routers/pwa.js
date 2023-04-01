import express from 'express';
import { answers } from '../data/answer.js';

const form = express.Router();
const queryString = (req) => req._parsedUrl.search;
const searchParts = (req) => req.split('/');


form
	.get('/p1', (req, res) => {
        const searchArray = searchParts(req._parsedOriginalUrl.pathname)
        let values = answers.find((object) => { if (object.subject == searchArray[1] && object.pageNumber == 'p7') return object}) || {};

        const pageType = 'p1';
        const subject = 'pwa';
        const title = 'Progressive web app';
        res.render('pages/form', {
            pageType,
            subject,
            title,
            values
        });
	})

	.get('/p2/', (req, res) => {
        const searchArray = searchParts(req._parsedOriginalUrl.pathname)
        let values = answers.find((object) => { if (object.subject == searchArray[1] && object.pageNumber == 'p8') return object}) || {};

		const obj = {
			pageNumber: 'p7',
			subject: 'pwa',
            title: 'Progressive web app',   
            teaching: req.query.teaching,
            grading: req.query.grading,
            difficulty: req.query.difficulty,
		};

		answers.push(obj);

        const pageType = 'p2';
        const subject = 'pwa';
        const title = 'Progressive web app';

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
			pageNumber: 'p8',
			subject: 'pwa',
            title: 'Progressive web app',   
			insight: req.query.insight,
            feedback: req.query.feedback,

		};

		answers.push(obj);

		res.render('pages/done', {
            answers
        });
	});

export default form;
