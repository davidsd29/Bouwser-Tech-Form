
import { answers } from '../data/answer.js';

const index =  (req, res) => {
    if ( answers.length !== 0) {
        const lastFilledArray = answers.slice(-1)
        const values = lastFilledArray.reduce((obj) => obj)
        
        const pageType = values.pageNumber;
        const subject = values.subject;
        const title = values.title;
        res.render('pages/form', {
            pageType,
            subject,
            title,
            query: null,
            values
        });
    } else {
        res.render("pages/index")
    }
}

const end =  (req, res) => {
    answers.splice(0,answers.length)
    res.redirect('/');
}

const done =  (req, res) => {
    console.log(answers);
    res.render("pages/done")
}



export {
    end,
    done,
    index,
}