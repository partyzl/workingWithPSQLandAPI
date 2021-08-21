const User = require('../model/user');

const router = require('express').Router();

router.get('/', async(req, res)=>{
    try {
        const users = await User.all;
        res.json({users})
    } catch (error) {
        res.status(404).json({message: "you fucked up"})
    }
})

module.exports = router;