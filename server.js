import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';


// Routes
import main from './routers/pages.js';
import wafs from './routers/wafs.js';
import cttr from './routers/cttr.js';
import bt from './routers/bt.js';
import pwa from './routers/pwa.js';
import register from './routers/register.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');

//Middelware (Has to happen before routing)
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname, 'assets')));


app.use('/', main);
app.use('/wafs', wafs);
app.use('/cttr', cttr);
app.use('/bt', bt);
app.use('/pwa', pwa);
app.use('/register', register);

app.use((req, res) => {
	res.status(404).render('404');
});


// Callback function
app.listen(1234, () => {
	console.log(`code is running in port:1234`);
});
