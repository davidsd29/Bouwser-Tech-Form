import express from 'express';

const form = express.Router();

import {index, start, pause, brouwserT, css, pwa }  from '../controllers/pages.js';

form.get('/', index)
    .get('/start', start)
    .get('/pause/:vak', pause)
    .get('/css', css)
    .get('/bt', brouwserT)
    .get('/pwa', pwa)

export default form;