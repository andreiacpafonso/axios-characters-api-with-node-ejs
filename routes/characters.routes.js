const router = require("express").Router();
const axios = require("axios");
const { response } = require("express");

/* GET home page */
router.get("/characters", (req, res, next) => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
    .then(responseFromAPI => {
        // console.log(responseFromAPI)
        res.render("characters/list-characters", { characters: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

//  GET to create a new character

router.get("/characters/create", (req, res, next) => {
   res.render("characters/create-character")

});


router.get("/characters/:id", (req, res, next) => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        // console.log("details: ", responseFromAPI.data)
        res.render("characters/details-character", { character: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

// POST to create a new character
router.post("/characters/create", (req, res, next) => {
    axios.post("https://ih-crud-api.herokuapp.com/characters", req.body)
    res.redirect("/characters")

});

// GET to edit/update a character   

router.get("/characters/:id/edit", (req, res, next) => {
    res.render ("characters/edit-character", {id: req.params.id})
});


// POST to update a character

router.post("/characters/:id/update", (req, res, next) => {
    axios.put("https://ih-crud-api.herokuapp.com/characters/:id", req.body)
    res.redirect("/characters/:id")

});

// POST to delete a character

router.post("/characters/:id/delete", (req, res, next) => {
    axios.delete("https://ih-crud-api.herokuapp.com/characters/:id", req.body)
    res.redirect("/characters")
});

module.exports = router;


// https://ih-crud-api.herokuapp.com/characters