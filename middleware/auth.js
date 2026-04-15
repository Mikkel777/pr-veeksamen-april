function requireLogin(req, res, next) {
    if (!req.session.user) {
        return res.redirect("/login");
    }
    next();
}

// ADMIN
function isAdmin(req, res, next) {
    if (!req.session.user || req.session.user.role !== "admin") {
        return res.status(403).send("Forbidden");
    }
    next();
}

module.exports = { requireLogin, isAdmin };