const timestamp = require('time-stamp');


function getTime(){
return timestamp('YYYY:MM:DD:HH:MM:SS')
}





module.exports.getTime = getTime;