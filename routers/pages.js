import express from 'express';

const form = express.Router();

import {index, end, done }  from '../controllers/pages.js';

form.get('/', index)
    .get('/klaar', done)
    .get('/send', end)

export default form;

