const {response } = require('express')

const login = (req, res = rsponse) => {
    res.json ({
        msg : 'LOGIN ok'
    })
}

module.exports ={
    login
}