require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/User');

const JWT_SECRET = process.env.SECRET_KEY;

async function register(req, res) {

    //TODO: Add validator
    const { username, email, password: plainTextPassword, conf_password } = req.body

	if (!username || typeof username !== 'string') {
		return res.json({ status: 'error', error: 'Invalid username' })
	}

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

    if (!email || typeof email !== 'string') {
        return res.json({ status: 'error', error: 'Invalid email' });
    }

    if(!conf_password || typeof conf_password !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password confirmation' });
    }

	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
        username.toLowerCase();
		const response = await User.create({
			username,
            email,
			password,
            createdAt: new Date().toISOString(),
            profileIcon: "https://i.imgur.com/0qvOvjO.jpg",
            description: "Hey! I am new to legalEase!",
            age: "18",
            state: "Odisha",
            city: "Bhubaneswar",
            address: "IIT Bhubaneswar"
		});
		console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'Username already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })
};

async function login(req, res) {
    const { username, password } = req.body
    username.toLowerCase();

	const user = await User.findOne({ username }).lean();

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: token })
	}

	res.json({ status: 'error', error: 'Invalid username/password' });
}

async function changePass(req, res) {
	
}

module.exports = {login, register};