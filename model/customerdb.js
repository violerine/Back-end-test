const  Cust= require("../model/customer");

var AddNewCust = (obj, callback) => {
    let newObj = new Cust(obj);

    newObj.save((error) => {
        if(error) throw error;
        callback(newObj);
    });

}

var GetCustById = (id, callback) => {
    
    Cust.findById(id, (error, result) => {
        if(error) throw error;
        callback(result);
    });

}

var GetAllCust = (callback) => {
    Cust.find({}, (error, result) => {
        if(error) throw error;
        callback(result);
    });
}

var DeleteCust = (id, callback) => {
    Cust.findByIdAndRemove(id, (error) => {
        if(error) throw error;
        callback("Cust Deleted !")
    });
}

var UpdateCust = (id, newObj, callback) => {
 
    Cust.findByIdAndUpdate(id, newObj, (error, result)=>{
        if(error) throw error;
        callback(result);
    });

}

module.exports = {
    AddNewCust,
    GetCustById,
    GetAllCust, 
    DeleteCust,
    UpdateCust
}