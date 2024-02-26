require('dotenv').config();
const Payments = require('../../../models/stripeModal')
const stripe = require("stripe")(process.env.SECRET_KEY);


const createPayment = async (req, res) => {
    try {
        const paymentInfo = await Payments(req.body);
        if (paymentInfo.depoAmount) {
            const deposit = parseInt(paymentInfo.depoAmount * 100)
            const paymentIntent = await stripe.paymentIntents.create({
                amount: deposit,
                currency: "usd",
                payment_method_types: ["card"],

            });
            return res.send({
                clientSecret: paymentIntent.client_secret
            });
        }
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Payment Server Error" });
    }
}

module.exports = createPayment;