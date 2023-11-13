var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('creater', { title: 'Express', name: 'Matt' });
});

router.post('/',function (req,res)
{
    let name = req.params

    console.log(name);
})

module.exports = router;