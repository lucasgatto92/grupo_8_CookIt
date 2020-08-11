module.exports = function(req, res) {
    if (req.session.user) {
        session = req.session.user;
    } else {
        session = undefined;
    }
    return session
}