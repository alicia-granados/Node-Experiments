const { response } = require("express");

const buscar = (req, res = response) =>{
    res.json({
        msg: "Biscar.."
    })
}

module.exports= {
    buscar
}