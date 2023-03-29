const index =  (req, res) => {
    res.render("pages/index")
}

const start =  (req, res) => {
    res.render("pages/register")
}

const done =  (req, res) => {
    res.render("pages/done")
}



export {
    start,
    done,
    index,
}