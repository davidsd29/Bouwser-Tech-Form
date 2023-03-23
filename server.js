import { fileURLToPath } from 'url';
import express from 'express';
import path from 'path';

// Routes
import main from './routers/pages.js';
import wafs from './routers/wafs.js';
import ctr from './routers/ctr.js';
import register from './routers/register.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');

//Middelware (Has to happen before routing)
app.use(express.static(path.join(__dirname, 'assets')));


app.use('/', main);
app.use('/wafs', wafs);
app.use('/ctr', ctr);
app.use('/register', register);

app.use((req, res) => {
	res.status(404).render('404');
});


// Callback function
app.listen(3000, () => {
	console.log(`code is running in port:3000`);
});
