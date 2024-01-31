const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const {LOCAL_CLIENT, CLIENT} = require ('../config/default.js')

const applyMiddleware = (app) => {
    app.use(cors({
        origin: [LOCAL_CLIENT, CLIENT],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true
    }))
    app.use(express.json());
    app.use(cookieParser());
}

module.exports = applyMiddleware;