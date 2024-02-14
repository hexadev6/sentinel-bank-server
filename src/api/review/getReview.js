const Reviews = require("../../models/reviewModel")

const insertReview = async (req, res) => {
    try {
        const result = await Reviews.find().sort({ _id: -1 })
        return res.send(result)

    }
    catch (err) {
        console.log(err)
        return res.send(err)
    }
}

module.exports = insertReview