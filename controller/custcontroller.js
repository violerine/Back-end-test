const express = require("express")
const custDB = require("../model/customerdb");
const cust = require("../model/customer");

const router = express.Router();


router.get("/cust", (req, res) => {
    custDB.GetAllCust((result) => {
        res.send(result);
    });
})

router.get("/cust/:id", (req, res) => {
    custDB.GetCustById(req.params.id, (result) => {
        res.send(result);
    });
})

router.post("/cust", (req, res) => {
    
    let obj = new Cust(req.body.Nama, 
                        req.body.Alamat, 
                        req.body.LuasTanah, 
                        req.body.Kontak
                        );
    
    custDB.AddNewCust(obj, function (result){
        res.send(result);
    });

})

router.put("/movie", (req, res) => {
    let newObj = new Cust(req.body.Nama, 
        req.body.Alamat, 
        req.body.LuasTanah, 
        req.body.Kontak
        );
    
    custDB.UpdateCust(req.body._id, newObj, (result)=>{
        res.send(result);
    })
})

router.delete("/movie/:id", (req, res) => {
    custDB.DeleteCust(req.params.id, (result) => {
        res.send(result);
    })
})


module.exports = (function(){
    return router;
})();