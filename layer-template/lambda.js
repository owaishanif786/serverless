const moment = require('moment');
const axios = require('axios');
module.exports.handler = (event, context, callback) => { 
    let str = moment("20111031", "YYYYMMDD").fromNow();
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // handle success
    console.log(str);
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    callback(null, "Ended" + str)
  });
    
    
}
