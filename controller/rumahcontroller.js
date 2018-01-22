const express = require("express")
const rumahDB = require("../model/rumahdb");
const rumah = require("../model/rumah");

const router = express.Router();


router.get("/rumah", (req, res) => {
    rumahDB.GetAllRumah((result) => {
        res.send(result);
    });
})

router.get("/rumah/:id", (req, res) => {
    rumahDB.GetRumahById(req.params.id, (result) => {
        res.send(result);
    });
})

router.post("/rumah", (req, res) => {
    
    let obj = new rumah(req.body.title, 
        req.body.NamaJenisRumah, 
        req.body.Harga, 
        req.body.LuasTanah, 
        req.body.JumlahUnit)
    
    rumahDB.AddNewRumah(obj, function (result){
        res.send(result);
    });

})

router.put("/rumah", (req, res) => {
    let newObj = new rumah(req.body.title, 
        req.body.NamaJenisRumah, 
        req.body.Harga, 
        req.body.LuasTanah, 
        req.body.JumlahUnit);
        
    
    rumahDB.UpdateRumah(req.body._id, newObj, (result)=>{
        res.send(result);
    })
})

router.delete("/rumah/:id", (req, res) => {
    rumahDB.DeleteRumah(req.params.id, (result) => {
        res.send(result);
    })
})


module.exports = (function(){
    return router;
})();