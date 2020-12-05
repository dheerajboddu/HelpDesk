const { resolveContent } = require('nodemailer/lib/shared');
const timestamp = require('time-stamp');



function getTime(){
return timestamp('YYYY:MM:DD:HH:MM:SS')
}

function getAssetId(object) {
    var assets = [];
    for(let details of object){
        assets.push(details.AssetId)
    }
    return assets;
}


module.exports.getTime = getTime;
module.exports.getAssetId = getAssetId;
