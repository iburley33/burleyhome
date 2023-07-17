const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  orderPrice: {
    type: Number,
    required: true,
    min: 0.99,
  },
  trackingNumber: {
    type: Number,
    required: true,
  },
  deliveryStatus: {
    type: String,
    enum: ['inTransit','delivered','processing'],
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
