const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/usersModel');

exports.register = async (req, res) => {
    try {
        let newUser = new Users(req.body);
        newUser.password = bcrypt.hashSync(req.body.password, 10);
        await newUser.save();
        res.status(200).json({ status: true, message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
};

exports.signIn = async (req, res) => {
    Users.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) throw err;
        if (!user || !user.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        return res.json({ token: jwt.sign({ 
            email:semail,
            fullname:sfullname,
            _id:s_id

        }, 'RESTFULAPIs') });
    });
};

exports.loginRequired = function (req, res, next) {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};

exports.profile = function (req, res, next) {
    if (req.user) {
        return res.json({ status: true, message: 'User profile fetched successfully!', user_info: req.user });
    } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
    }
};

exports.logout = function (req, res, next) {
    req.user = undefined;
    return res.json({ status: true, message: 'User logged out successfully!' });
}