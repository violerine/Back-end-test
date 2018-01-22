const Rumah = require ("../model/rumah")
var AddNewRumah = (obj, callback) => {
    
    let newObj = new Rumah(obj);

    newObj.save((error) => {
        if(error) throw error;
        callback(newObj);
    });

}

var GetRumahById = (id, callback) => {
    
    Rumah.findById(id, (error, result) => {
        if(error) throw error;
        callback(result);
    });

}

var GetAllRumah = (callback) => {
    Rumah.find({}, (error, result) => {
        if(error) throw error;
        callback(result);
    });
}

var DeleteRumah = (id, callback) => {
    Rumah.findByIdAndRemove(id, (error) => {
        if(error) throw error;
        callback("Rumah Deleted !")
    });
}

var UpdateRumah = (id, newObj, callback) => {
    Rumah.findByIdAndUpdate(id, newObj, (error, result)=>{
        if(error) throw error;
        callback(result);
    });

}

module.exports = {
    AddNewRumah,
    GetRumahById,
    GetAllRumah, 
    DeleteRumah,
    UpdateRumah
}
