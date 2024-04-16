const { errorHandler } = require('../utils/error')
const Auth = require('../services/auth.service')

exports.register = async (req, res) => {
    try {
        const customer = await Auth.register(req.body)
        res.status(201).json({ message: 'Customer created successfully', customer })
    } catch (error) {
        errorHandler(error, res)
    }
}