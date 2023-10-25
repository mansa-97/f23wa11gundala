var express = require('express');
var router=express.Router();
/* Get Home Page*/
router.get('/',(req,res,next)=>{
    console.log(req.query)
    if(Object.keys(req.query).length===0){
        console.log("Entered")
        let r=Math.random()
        res.render(`computation`,{value1:`Math.imul() applied to ${r} is ${Math.imul(r,r)}`,
        value2:`Math.log() applied to ${r} is ${Math.log(r)}`,
        value3:`Math.log10() applied to ${r} is ${Math.log10(r)}`});

    }else
    for(let x in req.query) {
        console.log(i)
        res.render(`computation`,{value1:`Math.imul() applied to ${req.query[x]} is ${Math.imul(req.query[x],req.query[x])}`,
        value2:`Math.log() applied to ${req.query[x]} is ${Math.log(req.query[x])}`,
        value3:`Math.log10() applied to ${req.query[x]} is ${Math.log10(req.query[x])}`});

    }

});
module.exports=router;