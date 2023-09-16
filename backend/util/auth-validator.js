const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRET_KEY;

async function checkAuth(req, res) {
    const { token } = req.headers;
    
    if(token) {
        try {
            const user = jwt.verify(token, JWT_SECRET);
            return user;
        } catch (err) {
            console.log('Invalid/Expired Token', err);
        }
    }
    console.log('Authentication token must be provided');

}

module.exports = { checkAuth };