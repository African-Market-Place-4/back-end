const User = require('./users-model')

const checkIdExists = async (req, res, next) => {
    const {id} = req.params;
    try{
        const user = await User.findBy(id)
        if(user.length >0 || user.username){
            req.user = user
            next()
        } else {
            next({status: 404, message: "user id does not exist" })
        }
    } catch (err) {
        next(err)
    }
}
const checkLoginBody = async (req, res, next) => {
    const {username, password} = req.body
    if(!username || !password){
        next({status:400, message:"Please include username and password" })
    } else if(typeof username !=="string" || typeof password !=="string"){
        next({status:400, message:  "Username and password must be strings"})
    }else {
        const userTrimmed = username.trim();
        const passTrimmed = password.trim();
        req.login = {username: userTrimmed, password: passTrimmed}
        try{
            const user = await User.findBy({username: req.login.username})
            if(user){
                req.user = user
                next()
            } else {
                next({
                    status:401,
                    message: "user doesn't exist"
                })
            }
        }catch (err){
            next(err)
        }
    }
}
const checkRegisterBody = async(req, res, next) => {
    const {username, password} = req.body
    if(!username || !password){
        next({
            status:400,
            message: "register must include username, password"
        })
    } else {
        next()
    }
}
module.exports={
    checkIdExists,
    checkLoginBody,
    checkRegisterBody
}