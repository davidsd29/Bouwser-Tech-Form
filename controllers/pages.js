const index =  (req, res) => {
    res.render("pages/index")
}

const start =  (req, res) => {
    res.render("pages/start")
}

const pause =  (req, res) => {
    const subject = req.params.vak;
    res.render("pages/break", {
            subject
    })
}

const brouwserT =  (req, res) => {
    const pageType = "brouwserT";
    res.render("pages/form", {
       pageType
    })
}

const css =  (req, res) => {
    const pageType = "css";

    res.render("pages/form", {
       pageType
    })
}

const pwa =  (req, res) => {
    const pageType = "pwa";
    res.render("pages/form", {
       pageType,
    })
}

export {
    css,
    pwa,
    start,
    pause,
    index,
    brouwserT,
}