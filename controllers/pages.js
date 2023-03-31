const index =  (req, res) => {
    res.render("pages/index")
}

const start =  (req, res) => {
     const pageType = 'p1';
    const subject = 'wafs';
    const title = 'Web app from scratch';
    res.render('pages/form', {
        pageType,
        subject,
        title
    });

}
const done =  (req, res) => {
    res.render("pages/done")
}



export {
    start,
    done,
    index,
}