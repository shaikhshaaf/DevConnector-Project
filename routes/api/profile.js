const express = require ('express');
const router = express.Router();



// @route GET api/profile/test
// @descn tests profile route 
// @access public

router.get('/test', (req,res)=> res.json({msg: 'profile works'}));

module.exports =router;
 
