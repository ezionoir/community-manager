const jwt = require('jsonwebtoken')
var Token ={
     getDataFromToken (token) {
        try {
            var decoded = jwt.verify(token, process.env.SECRET_KEY_TOKEN);
            return decoded
          } catch(err) {
            return 0
          }
    }
} 
module.exports = Token