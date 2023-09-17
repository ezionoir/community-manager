const tokenHelper = require('../helper/Token')
const { UserRoleEnum } = require('../constants/Enum')
const ethUtil = require('ethereumjs-util');

var AuthMiddleware = {
    // authorizeUser: function(req, res, next, role) {
    //     data = tokenHelper.getDataFromToken(req.cookies.token)
    //     console.log('middleware',data.user,'\n')
    //     if (data === 0 || !data.user || data.user.role!=role)
    //         res.status(403).send({
    //             status: 403,
    //             message: 'Bad authentication'
    //         })
    //     else {
    //         console.log(data.user);
    //         req.user = data.user
    //         next()
    //     }
    // },
    // isContributor: (req, res, next) => {
    //     AuthMiddleware.authorizeUser(req,res,next,UserRoleEnum.contributor)
    // },
    // isPartner: (req, res, next) => {
    //     AuthMiddleware.authorizeUser(req,res,next,UserRoleEnum.partner)
    // },
    // isAdmin: (req, res, next) => {
    //     AuthMiddleware.authorizeUser(req,res,next,UserRoleEnum.admin)
    // }
     verifySignature(message, signature, address) {
        const messageHash = ethUtil.hashPersonalMessage(Buffer.from(message));
        const signatureBuffer = ethUtil.toBuffer(signature);
        const addressBuffer = ethUtil.toBuffer(address);
        
        const recoveredAddress = ethUtil.bufferToHex(ethUtil.pubToAddress(
          ethUtil.ecrecover(messageHash, signatureBuffer.slice(0, 32), signatureBuffer.slice(32, 64), 27)
        ));
        
        return address.toLowerCase() === recoveredAddress.toLowerCase();
      }
}

module.exports = AuthMiddleware