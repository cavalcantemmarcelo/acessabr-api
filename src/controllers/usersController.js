const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/usersModel');

exports.register = async (req, res) => {
    try {
        let newUser = new Users(req.body);
        newUser.password = bcrypt.hashSync(req.body.password, 10);
        await newUser.save();
        res.status(200).json({ status: true, message: 'Usuário registrado com sucesso' });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ status: false, message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email });

        if (!user) {
            console.log('User not found');
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {
            console.log('Password comparison failed');
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }

        const token = jwt.sign(
            { email: user.email, fullname: user.fullname, _id: user._id },
            'RESTFULAPIs'
        );

        return res.json({ token });

    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: err.message });
    }
};

exports.loginRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};

exports.profile = (req, res, next) => {
    if (req.user) {
        return res.json({
            status: true,
            message: 'User profile fetched successfully!',
            user_info: req.user,
        });
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};

exports.logout = (req, res) => {
    req.user = undefined;
    return res.json({ status: true, message: 'User logged out successfully!' });
};
