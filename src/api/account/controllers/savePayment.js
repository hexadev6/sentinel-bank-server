require('dotenv').config();
const Payments = require('../../../models/stripeModal')
const SSLCommerzPayment = require('sslcommerz-lts')
const Deposits = require('../../../models/DepositHistoryModel')
const store_id = process.env.STORE_ID
const store_passwd = process.env.STORE_PASS
const is_live = false


const savePayment = async (req, res) => {
    try {
        const paymentInfo = new Deposits(req.body);
        const transId = paymentInfo._id.toString()
        const data = {
            total_amount: paymentInfo.amount,
            currency: 'BDT',
            tran_id: transId, // use unique tran_id for each api call
            success_url: `https://localhost:5000/deposit/${transId}`,
            fail_url: 'http://localhost:3030/fail',
            cancel_url: 'http://localhost:3030/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: paymentInfo.transactionType,
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: paymentInfo.userName,
            cus_email: paymentInfo.userEmail,
            cus_add1: paymentInfo.address,
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '9876543245',
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };

        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        sslcz.init(data).then(async (apiResponse) => {
            let GatewayPageURL = apiResponse.GatewayPageURL
            const finalPayment = new Deposits({
                ...paymentInfo.toObject(), transactionId: transId
             })
            const result = await finalPayment.save()
            // console.log(result)
            res.send({ url: GatewayPageURL })
        });
    }
    catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Payment success Error" });
    }
}

module.exports = savePayment;