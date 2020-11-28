const { getpassword } = require('../services/db')



function authenticate(cred,res){
    getpassword(cred.id).then((item) => {
        if(cred.password == item[0].password){
            res.json({allowed : "True"})
        }
        else{
            res.json({allowed : "False"})
        }
    })
    .catch((err) => {
        console.log(err)
        res.status(500).end()
      })
}



exports.authenticate = authenticate;