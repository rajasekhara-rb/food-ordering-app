import { authenticateUser } from "./auth.js"

const OnlyAdminsAccess = async (req, res, next) => {
    if (!req.user.roles.includes("admin")) {
        res.status(401).json("Unauthorized! Only Admins have the access")
        // throw new Error("Only Admins have the access");
    } else {
        next()
    }
}

export {
    OnlyAdminsAccess
};