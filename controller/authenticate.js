const { getpassword, getAssets } = require('../services/db')
var utility = require('../Utilities');


function authenticate(cred,res){
    getpassword(cred.id).then((item) => {
        if(cred.password == item[0].password){
            getAssets(cred.id).then((item) => {
              var ids = utility.getAssetId(item);
                res.json({allowed : "True", assetIds : ids})
            })
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