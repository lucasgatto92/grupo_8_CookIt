module.exports = (req,res,next)=>{
    req.session.url = req.originalUrl;
    next()
}