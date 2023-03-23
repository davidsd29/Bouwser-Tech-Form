import express from 'express';

const form = express.Router();

form
    .get('/p1', (req, res) => {
        const pageType = "p2";
        res.render("pages/wafs", {
        pageType
        })
    })

    .get('/p2', (req, res) => {
            const pageType = "p1";
            res.render("pages/ctr", {
            pageType
            })
    })
    
    .get('/p3', (req, res) => {
            const pageType = "wafs";
            res.render("pages/form", {
            pageType
            })
    })
    
export default form;