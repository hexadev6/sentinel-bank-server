const express = require('express');
const globalErrorHandler = require('./utils/globalErrorHandler');
const applyMiddleware = require('./middlewares');
const app = express();
const port = process.env.PORT || 5000;
const authRoutes = require('./routes/authentication');
const connectDB = require('./db/connectDB');
const userRoutes = require('./routes/userInfo/userInfo')
const accountRoutes = require('./routes/account');
const paymentRoutes = require('./routes/payment');
const transactionsRoutes = require('./routes/transactions');
const allDeposits = require('./routes/transactions');

// applying all middlewares like cors, express json, cookie parser
applyMiddleware(app);

app.use(authRoutes);
app.use(userRoutes);
app.use(accountRoutes);
app.use(paymentRoutes);
app.use(transactionsRoutes);
// app.use(allDeposits);


// default route
app.get('/', async (req, res) => {
    try {
        res.status(200).send('SENTINEL TRUST BANK SERVER IS ONLINE......')
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})



// handle all unhandled routes
app.all('*', async (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`)
    error.status = 404;
    next(error);
})


// error handling middleware
app.use(globalErrorHandler)



const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`server is listening to ${port}`)
    })
}

main();