const Reviews = require("../../models/reviewModel")

const insertReview = async (req, res) => {
    try {
        const review = Reviews(req.body)
        const result = await review.save()
        return res.status(200).json({ message: true, data: result })
    }
    catch (err) {
        console.log(err)
        return res.send(err)
    }
}

module.exports = insertReview