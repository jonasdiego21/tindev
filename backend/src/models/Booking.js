const mogoose = require('mongoose');

const BookingSchema = new mogoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mogoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    spot: {
        type: mogoose.Schema.Types.ObjectId,
        ref: 'Spot',
    }
});

module.exports = mogoose.model('Booking', BookingSchema)