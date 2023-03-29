import express from 'express';

const form = express.Router();

import {index, start, done }  from '../controllers/pages.js';

form.get('/', index)
    .get('/start', start)
    .get('/klaar', done)

export default form;

