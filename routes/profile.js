var express = require('express');
const {getFirestore} = require("firebase-admin/firestore");
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render("profile");
});

const db = getFirestore();
async function updater() {
    const cityRef = db.collection('users').doc('alovelaced');

    const res = await cityRef.set({
        single:true


    }, { merge: true });

}

// updater()


module.exports = router;