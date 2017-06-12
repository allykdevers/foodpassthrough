var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var config = require('../config');

/* Passthrough for the Food2Fork endpoints */
router.get('/', function(req, res, next) {

    var q = req.query.q;
    var url = "http://food2fork.com/api/search?q=" + q + "&key=" + config.key;
    unirest.get(url)
        .end((recipes)=>{
            return res.json(JSON.parse(recipes.body));
         });
});

module.exports = router;
