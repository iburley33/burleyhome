const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  stock: {
    type: Number,
    min: 0,
    default: 0
  },
  sku: {
    type: Number,
    required: true,
  },
  shippingCost: {
    type: Number,
    required: true,
    min: 0.99
  },
  deliveryEstimate: {
    type: Number,
    required: true,
    min: 0.99
  },  
  returnStatus: {
    type: String,
    required: true,
    enum: ['waiting','received','processed','kept'],
    default: 'kept',
  },
  refunded: {
    type: Boolean,
    required: false,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
